import { Link } from "react-router-dom";
import cn from "classnames/bind";

import css from './ProductSubcategories.module.css';

const cx = cn.bind(css);

export const ProductSubcategories = ({ categoryId, data }) => {

    return (
      <section className={cx('product-subcategories')}>
        {
          data.map((subcategory) => (
            <Link key={subcategory.uid} to={`/catalog/${categoryId}/${subcategory.uid}`} className={cx('subcategory')}>{subcategory.title}</Link>
          ))
        }
      </section>
    );
};
