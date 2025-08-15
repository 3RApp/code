import cn from "classnames/bind";

import css from './Button.module.css';

const cx = cn.bind(css);

export const Button = ({ style, type = "button", onClick, title, disabled = false }) => {

  return (
    <button disabled={disabled} style={{ ...style }} className={cx('button', `${style ? '' : 'button-size'}` )} type={type} onClick={(e)=> { onClick && onClick(e)}}>
      {title}
    </button>
  );
};
