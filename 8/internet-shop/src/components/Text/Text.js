import cn from "classnames/bind";

import css from './Text.module.css';

const cx = cn.bind(css);

export const Text = ({ text }) => {

  return (
      <p className={cx('text')}>
        {text}
      </p>
  );
};    