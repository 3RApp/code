import { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames/bind";
import { Price } from "../Price";
import { Header } from "../../components"
import { Pointer } from "./Pointer";
import { imageRepository } from "../../const";

import css from './Slider.module.css';

const cx = cn.bind(css);

export const Slider = ({ list }) => {

  const [index, setIndex] = useState(0);
  const { title, vendorTitle, price, currencyCode, categoryId, subcategoryId, uid, image: { middle }} = list[index];

    return (
      <section className={cx('slider')}>
        <div className={cx('slide')}>
            <img src={`${imageRepository}${middle[0]}`} alt={title} />
            <div className={cx('slide-middle')}>
              <Header title={title} size="xl" />
              <Header title={vendorTitle} size="lg" />
              <Link className={cx('slide-middle__link')} to={`/catalog/${categoryId}/${subcategoryId}/${uid}`}>Перейти</Link>
            </div>
            <div>
              <Header title="ВСЕГО" />
              <Price value={price} code={currencyCode} size="hero" />
            </div>
          </div>
        <Pointer count={list.length} index={index} onClick={setIndex} />
      </section>
    );
};
    