import { useLoaderData, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import cn from "classnames/bind";
import { NewMark, Presentation, Price, AddFavorite, ProductDetails, ProductDescription } from "../../business";
import { Breadcrumbs, Button, Header } from "../../components";

import { addProduct } from "../../store/basketSlice";

import { selectFavoriteById } from "../../store/favoriteSlice";
import { createBreadcrumbsList } from "./utils";
import { extractBasketData } from "../../utils";

import css from "./ProductPage.module.css";

const cx = cn.bind(css);

export const ProductPage = () => {
    const dispatch = useDispatch();
    const { menu, product } = useLoaderData();

    const { categoryId, subcategoryId, productId } = useParams();
    const isInFavorite = useSelector((state) => selectFavoriteById(state, productId));
    const { image, title, vendorTitle, humanSubcategoryTitle, price, currencyCode, description } = product.data;

    const data = extractBasketData(product.data);
    const crumbs = createBreadcrumbsList({ 
        categoryId, subcategoryId, categoryData: menu.categories.data, 
        subcategoryData: menu.subcategories.data });
    const handleAddToCart = () => { dispatch(addProduct({ id: productId, count: 1, price, data })) };

    return (<>
      <header>
        <Breadcrumbs crumbs={crumbs} />
      </header>
      <main className={cx('product-page')}>
        <section className={cx('product-page__images')}>
          <NewMark className={cx('product-page__new-mark')} />
          <Presentation className={cx('product-page__presentation')} images={image} />
        </section>
        <section className={cx('product-page__text')}>
        <div>
          <div className={cx('product-page__header-price')}>
            <Header title={title} type="h3" />
            <Price value={price} code={currencyCode} size="hero" />
          </div>
          <div className={cx('product-page__buttons')}>
            <AddFavorite checked={isInFavorite} productId={productId} />
            <Button title="В корзину" onClick={handleAddToCart} />
          </div>
        </div>
        <ProductDetails details={{title, vendorTitle, humanSubcategoryTitle}} />
        <ProductDescription description={description} />
        </section>
      </main>
    </>);
};