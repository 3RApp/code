import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import cn from "classnames/bind";
import { Breadcrumbs, Header, Text } from "../../components"
import { selectPhone, clearPhone } from "../../store/customerSlice";
import { clearBasket } from "../../store/basketSlice";
import { selectOrderId, clearOrderId } from "../../store/orderIdSlice";
import { getCurrentDate } from "../utils";
import { breadcrumbs } from "./data";

import css from './ConfirmationPage.module.css';

const cx = cn.bind(css);

export const ConfirmationPage = () => {

  const dispatch = useDispatch();
  const phone = useSelector(selectPhone);
  const orderIdStore = useSelector(selectOrderId);

  useEffect(() => {
      const sendActionBeforeUnload = () => {
        dispatch(clearPhone());
        dispatch(clearBasket());
        dispatch(clearOrderId());
      };
    return sendActionBeforeUnload;
  }, []);

  return (
      <main className={cx('confirmation')}>
        <Breadcrumbs crumbs={breadcrumbs} />
        <Header title={`Заказ №${orderIdStore} от ${getCurrentDate()} г. принят`} />
        <Text text={`На телефон ${phone} поступит смс-уведомление о возможсти забрать заказ из пункта выдачи.`} />
        <span className={cx('link-block')}>Перейти в </span><Link className={cx('link-block')} to="/catalog">Каталог</Link>
      </main>
  );
};
