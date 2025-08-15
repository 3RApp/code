import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import cn from "classnames/bind";
import { getMenu } from './getMenu';
import { clearFilter } from "../../store/filterSlice";

import css from './Menu.module.css';

const cx = cn.bind(css);

export const Menu = ({ categories, categoryId, subcategories, subcategoryId }) => {

  const dispatch = useDispatch();
  const menu = getMenu(categories, categoryId, subcategories, subcategoryId);

      return (
        <nav className={cx('menu')}>
          {
            menu.map(({ uid, title, current, isSubcategory }) => {
              const to = isSubcategory ? `/catalog/${categoryId}/${uid}` : `/catalog/${uid}`;

              return (<Link onClick={() => { dispatch(clearFilter()) }} to={to} key={uid} className={cx('menu__item', {['current']: current}, {['subcategory']: isSubcategory})}>{title}</Link>)
            })
          }
        </nav>
    );
};