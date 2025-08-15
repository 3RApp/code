import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
import cn from "classnames/bind";
import { selectTotal } from "../../../store/basketSlice";

import css from "./BasketValue.module.css";

const cx = cn.bind(css);

export const BasketValue = () => {
    const total = useSelector(selectTotal);
    const imgText = `Корзина с товарами на сумму ${total} руб.`;

    return (
        <div className={cx("basket")}>
            <Link to="/basket">
                <img className={cx("icon")} src="/icons/basket.svg" title={imgText} alt={imgText} />
            </Link>
            <span className={cx("title")}>Корзина</span>
            <span className={cx("total")}>
                {total} <span className={cx("currency")}>руб.</span>
            </span>
        </div>
    );
};