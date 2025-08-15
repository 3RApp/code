import { Link } from "react-router-dom";
import cn from "classnames/bind";
import { enhanceBreadcrumbsList } from "./utils";

import css from './Breadcrumbs.module.css';

const cx = cn.bind(css);

export const Breadcrumbs = ({ crumbs }) => {

  return (
    <nav className={cx('breadcrumbs')}>
      {
        enhanceBreadcrumbsList(crumbs).map((crumb, index) => {
          const { title, to } = crumb;
          const key = `${index}-${index}`;

          return to !== null ? <Link key={key} to={to}>{title}</Link> : <span key={key}>{title}</span>;
        })
      }
    </nav>
  );
};
