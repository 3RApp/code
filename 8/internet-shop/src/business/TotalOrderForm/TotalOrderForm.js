import { Price } from "../Price"
import cn from "classnames/bind";
import { defaultShopCurrencyCode } from "../../const";

import css from './TotalOrderForm.module.css';

const cx = cn.bind(css);

export const TotalOrderForm = ({ total }) => {

  return (
    <section className={cx('total-order-form')}>
      Итого: <Price value={total} code={defaultShopCurrencyCode} size="xxl" />
    </section>
  );
};
