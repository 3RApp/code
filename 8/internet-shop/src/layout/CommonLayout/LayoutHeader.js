import { NavLink } from "react-router-dom";
import cn from "classnames/bind";

import css from "./LayoutHeader.module.css";

const cx = cn.bind(css);

const [main, catalog] = [
    { to: '/', title: 'Главная'}, 
    { to: '/catalog', title: 'Каталог'}
].map(({key, to, title}) => <NavLink to={to} className={({ isActive, isPending }) => 
                isPending ? cx('nav-link', 'pending') : isActive ? cx('nav-link', 'active') : cx('nav-link') }>{title}</NavLink>);

export const LayoutHeader = () => {
    return (
        <nav>
            <span className={cx('internet-shop-name')}>Пользунок</span>
            {main}
            {catalog}
        </nav>
    );
};