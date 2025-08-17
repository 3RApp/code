import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import cn from "classnames/bind";
import { Price } from "../Price";
import { Header, Button } from "../../components"
import { imageRepository } from "../../const";
import { deleteProduct, changeCount } from "../../store/basketSlice";
import down from "./image/down.svg";
import up from "./image/up.svg";

import css from './ProductBasket.module.css';

const cx = cn.bind(css);

export const ProductBasket = ({ product }) => {

  const dispatch = useDispatch();

  const { uid, categoryId, subcategoryId, title, price, count, currencyCode, image } = product;

  const handleChangeCount = (e) => {
    const value = parseInt(e.target.value);

    if (isNaN(value)){
      return;
    }

    if (value < 1){
      dispatch(changeCount({ id: uid, count: 1 }));
      return;
    }

    dispatch(changeCount({ id: uid, count: value }));
  };

  const handleClickCount = (e) => {
    
    const value = parseInt(e.target.value);

    if (count + value <= 1){
      dispatch(changeCount({ id: uid, count: 1 }));
      return;
    }

    dispatch(changeCount({ id: uid, count: count + value }));    
  };

  const handleDelete = () => {
    dispatch(deleteProduct({ id: uid }));
  };

  return (
    <section className={cx('product-basket')}>
      <div className={cx('product-basket__content')}>
        <div className={cx('product-basket__image')}>
          <img src={`${imageRepository}${image}`} alt={title} title={title} />
        </div>
        <div className={cx('product-basket__description')}>
          <Header title={title} size="lg" />
          <div className={cx('product-basket__description__price')}>
            <span>Цена:</span><Price value={price} code={currencyCode} size="lg" />
          </div>
        </div>
      </div>
      <div className={cx('product-basket__count')}>
        <input type="image" src={down} alt="Уменьшить количество" value={-1} onClick={handleClickCount} />
        <input type="text" className={cx('product-basket__count__input')} value={count} onChange={handleChangeCount} />
        <input type="image" src={up} alt="Увеличить количество"  value={1} onClick={handleClickCount} />
      </div>
      <div className={cx('product-basket__delete')}>
        <Price value={price * count} code={currencyCode} size="xxxl" />
        <Button title="Удалить" onClick={handleDelete} />
      </div>
    </section>
  );
};
