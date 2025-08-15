import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cn from "classnames/bind";
import { ProductBasket, TotalBasket } from '../../business';
import { Breadcrumbs, Button, Header } from "../../components";
import { selectProducts, selectTotal } from '../../store/basketSlice';
import { pathNavigateToPage } from "../../pathNavigateToPage";
import { modifyProductListStructure } from "./utils";
import { defaultShopCurrencyCode } from "../../const";
import { breadcrumbs } from './data';

import css from "./BasketPage.module.css";

const cx = cn.bind(css);

export const BasketPage = () => {
    const navigate = useNavigate();
    const products = useSelector(selectProducts);
    const total = useSelector(selectTotal);
    const productList = modifyProductListStructure(products);
    const {orderForm: orderFormPage} = pathNavigateToPage;
    const handleClick = () => {navigate(orderFormPage)};

    if (productList.length === 0) {
        return (
            <main>
                <Header title="Корзина пуста" type="h3" />
            </main>
        );
    }

    return (
        <main className={cx('basket-page')}>
            <Breadcrumbs crumbs={breadcrumbs} />
                <section>
                    {
                        productList.map((product) => (
                            <ProductBasket key={product.uid} product={product} />
                        ))
                    }
                </section>
            <section className={cx('basket-page__total-basket')}>
              <TotalBasket total={total} code={defaultShopCurrencyCode} size="xxxl" />
              <Button onClick={handleClick} title="К форме заказа" />
            </section>
        </main>
    );
};
