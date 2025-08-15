import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import cn from "classnames/bind";
import { Price } from "../Price";
import { Header, Button } from "../../components"
import { addProduct } from "../../store/basketSlice";
import { imageRepository } from "../../const";
import { getRandomImage } from "../utils";

import css from './ProductCardSquare.module.css';

const cx = cn.bind(css);

export const ProductCardSquare = ({ product, showSubcategory, isProductInBasket }) => {

  const dispatch = useDispatch();
  const { uid, humanSubcategoryTitle, title, vendorTitle, price, currencyCode, categoryId, subcategoryId, image: { small } } = product;
  const buttonTitle = isProductInBasket ? 'В корзине' : 'В корзину';
  const image = getRandomImage(small);
  const handleClick = () => {
    dispatch(addProduct({id: uid, count: 1, price, data: { uid, title, price, currencyCode, image, categoryId, subcategoryId  }}));
  };

  return (
      <section className={cx('product-card-square')}>
        {showSubcategory && <Header title={humanSubcategoryTitle} type="h4" />}
        <div className={cx('product-card-square__content')}>
          <div className={cx('product-card-square__description')}>
            <div className={cx('product-card-square__image')}>
              <img src={`${imageRepository}${image}`} alt={title} />
            </div>
            <div>
              <div className={cx('product-card-square__info__title')}>
                <Header title={title} />
              </div>
              <Link 
                to={`/catalog/${categoryId}/${subcategoryId}/${uid}`} 
                title={`Перейти на страницу товара ${title}`}
                className={cx('product-card-square__link-to-product-page')}>
                  Перейти
              </Link>
            </div>
          </div>
          <div className={cx('product-card-square__footer')}>
            <Price value={price} code={currencyCode} size="xl" />
            <Button title={buttonTitle} onClick={handleClick} />
          </div>
        </div>
      </section>
  );
};