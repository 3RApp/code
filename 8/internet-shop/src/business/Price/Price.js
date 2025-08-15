import cn from "classnames/bind";
import { currencies } from './currencies';
import { sizes } from "../../const";

import css from './Price.module.css';

const cx = cn.bind(css);

export const Price = ({ value, code, size = "base" }) => {

  if (!code || !currencies[code]) {
    return null;
  }

  return (
    <section className={cx('price')}>
      <span style={{ fontSize: `${sizes[size]}px` }}>{value}</span>
      <span className={cx('currency-code')} title={currencies[code].title}>{currencies[code].shortDot}</span>
    </section>
  );
};
