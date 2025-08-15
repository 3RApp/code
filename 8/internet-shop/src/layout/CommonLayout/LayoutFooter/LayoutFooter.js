import { NavLink } from "react-router-dom";
import cn from "classnames/bind";
import { icons } from "./icons";
import css from "./LayoutFooter.module.css";

const cx = cn.bind(css);

export const LayoutFooter = () => {
    return (
        <footer>
            <section className={cx('left')}>
                <span className={cx('internet-shop-name')}>Пользунок</span>
                <span className={cx('internet-shop-description')}>Интернет-магазин</span>
                <span className={cx('internet-shop-description')}>полезных товаров</span>
                <div className={cx('left-vertical-line')} />
            </section>
            <section className={cx('middle')}>
                <NavLink to="/catalog" className={({ isActive, isPending }) => 
                                isPending ? cx('nav-link', 'pending') : isActive ? cx('nav-link', 'active') : cx('nav-link') }>Каталог</NavLink>
            </section>
            <section className={cx('right')}>
                {
                    icons.map(icon => {
                        const {key, src, title, url} = icon;

                        return (
                            <a href={url} key={key}>
                                <div className={cx('icon-container')}>
                                    <img src={src} title={title} />
                                </div>
                            </a>
                        )
                    })
                }
            </section>
        </footer>
    );
};
