import { Link } from "react-router-dom";
import cn from "classnames/bind";
import { Header } from "../../components";

import css from './ProductCategories.module.css';

const cx = cn.bind(css);

export const ProductCategories = ({ data }) => {

    return (
      <section className={cx('product-categories')}>
        {
          data.map((category) => (
            <Link key={category.uid} to={`/catalog/${category.uid}`} className={cx('category')}>
              <Header title={category.title} size="lg" />
            </Link>
          ))
        }
      </section>
    );
};
