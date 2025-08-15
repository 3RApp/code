import cn from "classnames/bind";
import newMark from "./image/new.png";

import css from './NewMark.module.css';

const cx = cn.bind(css);

export const NewMark = () => {

    return (<img src={newMark} alt="Новинка" title="Новинка" className={cx('new')} />);
};
    