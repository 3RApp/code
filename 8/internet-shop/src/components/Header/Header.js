import cn from "classnames/bind";
import { sizes } from "../../const";
import css from './Header.module.css';

const cx = cn.bind(css);

export const Header = ({ title, type, size = "base", upper = false }) => {

  const __title = upper ? title.toUpperCase() : title;

  switch(type) {
    case 'h1':
      return <h1 className={cx('header')}>{__title}</h1>;
    case 'h2':
      return <h2 className={cx('header')}>{__title}</h2>;
    case 'h3':
      return <h3 className={cx('header')}>{__title}</h3>;
    case 'h4':
      return <h4 className={cx('header')}>{__title}</h4>;
    case 'h5':
      return <h5 className={cx('header')}>{__title}</h5>;
    case 'h6':
      return <h6 className={cx('header')}>{__title}</h6>;
    default:
      return <span className={cx('header')} style={{ fontSize: `${sizes[size]}px` }}>{__title}</span>;
  }
};
    