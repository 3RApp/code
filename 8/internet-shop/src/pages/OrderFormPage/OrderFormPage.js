import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cn from "classnames/bind";
import { useSelector, useDispatch } from "react-redux";
import { NameForm, DeliveryForm, Price, TotalOrderForm } from "../../business"
import { Breadcrumbs, Header, Button } from "../../components"
import { selectTotal, selectProducts, selectProductsCount } from "../../store/basketSlice";
import { selectCustomer, clearCustomer } from "../../store/customerSlice";
import { selectOrderId, addOrderId } from "../../store/orderIdSlice";
import { selectDeliveryCost } from "../../store/deliverySlice";
import { getCurrentDate } from "../utils";
import { pathNavigateToPage } from "../../pathNavigateToPage";
import { breadcrumbs } from "./data";
import { defaultShopCurrencyCode } from "../../const";

import css from './OrderFormPage.module.css';

const cx = cn.bind(css);

export const OrderFormPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const total = useSelector(selectTotal);
  const products = useSelector(selectProducts);
  const count = useSelector(selectProductsCount);
  const orderIdStore = useSelector(selectOrderId);
  const deliveryCost = useSelector(selectDeliveryCost);
  const {name, secondName, phone} = useSelector(selectCustomer);
  const [orderId, setOrderId] = useState(orderIdStore);
  const {confirmation: confirmationPage} = pathNavigateToPage;
  const handleClick = () => {
    fetch("/api/v1/orders/create", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderId: orderId,
        products,
        count,
        total: total + deliveryCost,
        customer: {name, secondName, phone}
        }),
      }).then(response => response.json()).then(data => {

        dispatch(clearCustomer());
        navigate(confirmationPage, {
          state: {
            orderId: orderId,
            message: data.data,
          }
        });
      });
  };

  useEffect(() => {
    if (orderId === null) {
      fetch("/api/v1/orders/create", { method: "POST", }).then(response => response.json()).then(data => {

        if (data.success) {
          console.log(
            `Заказ №${data.data} успешно создан`
          );
          dispatch(addOrderId(data.data));
          setOrderId(data.data);
        }
      });
    }
  }, []);

  return (
      <main className={cx('order-form-page')}>
        <Breadcrumbs crumbs={breadcrumbs} />
        <Header title={`Заказ №${orderId} от ${getCurrentDate()} г.`} type="h3" />
        <section className={cx('order-form-page__total')}>
          <Header title="Товаров на сумму:" size="md" />
          <Price value={total} code={defaultShopCurrencyCode} size="xxl" />
        </section>
        <NameForm />
        <DeliveryForm />
        <TotalOrderForm total={deliveryCost} />
        <hr />
        <section className={cx('order-form-page__total')}>
          <Header title="Итого по заказу:" size="md" />
          <Price value={total + deliveryCost} code={defaultShopCurrencyCode} size="xxl" />
        </section>
        <section className={cx('order-form-page__button')}>
          <Button type="submit" title="Оформить заказ" onClick={handleClick} />
        </section>
      </main>
  );
};
