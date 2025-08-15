import { Price } from "../Price"
import cn from "classnames/bind";

import css from './TotalBasket.module.css';

const cx = cn.bind(css);

export const TotalBasket = ({ total, code, size }) => {

  return (
    <section className={cx('total-basket')}>
      Итого: <Price value={total} code={code} size={size} />
    </section>
  );
};
