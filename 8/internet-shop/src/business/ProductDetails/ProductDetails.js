import cn from "classnames/bind";
import { createDetailList } from './createDetailList';

import css from './ProductDetails.module.css';

const cx = cn.bind(css);

export const ProductDetails = ({ details }) => {

  const detailList = createDetailList(details);

  return (
    <section className={cx('product-details')}>
      {
        detailList.map((detail) => {
          const { key, value, title } = detail;
          
          return (
            <div className={cx('detail')} key={key}>
              <span className={cx('detail-title')}>{title}</span>
              <span className={cx('detail-value')}>{value}</span>
            </div>
          );
        })
      }
    </section>
  );
};
