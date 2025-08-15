import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import cn from "classnames/bind";
import { Price } from "../Price";
import { Header, Button } from "../../components"
import { addProduct } from "../../store/basketSlice";
import { imageRepository, maxLengthDescriptionText } from "../../const";
import { cutText } from "./cutText";
import { getRandomImage } from "../utils";

import css from './ProductCardRect.module.css';

const cx = cn.bind(css);

export const ProductCardRect = ({ product, showSubcategory, isProductInBasket }) => {

  const dispatch = useDispatch();
  const { uid, humanSubcategoryTitle, title, vendorTitle, description, price, currencyCode, categoryId, subcategoryId, image: { small } } = product;
  const buttonTitle = isProductInBasket ? 'В корзине' : 'В корзину';
  const image = getRandomImage(small);
  const handleClick = () => {
    dispatch(addProduct({id: uid, count: 1, price, data: { uid, title, price, currencyCode, image, categoryId, subcategoryId }}));
  };

  return (
      <section className={cx('product-card-rect')}>
        { showSubcategory && <Header title={humanSubcategoryTitle} /> }
        <div className={cx('product-card-rect__description')}>
          <div className={cx('product-card-rect__image')}>
            <img src={`${imageRepository}${image}`} alt={title} />
          </div>
          <div>
            <div>{vendorTitle}</div>
            <div className={cx('product-card-rect__info__title')}>{title}</div>
            <div>{cutText(title, description, 200)}</div>
            <Link 
              to={`/catalog/${categoryId}/${subcategoryId}/${uid}`} 
              title={`Перейти на страницу товара ${title}`}
              className={cx('product-card-rect__link-to-product-page')}>
                Перейти
            </Link>
          </div>
        </div>
        <div className={cx('product-card-rect__footer')}>
          <Price value={price} code={currencyCode} size="xl" />
          <Button title={buttonTitle} onClick={handleClick} />
        </div>
      </section>
  );
};