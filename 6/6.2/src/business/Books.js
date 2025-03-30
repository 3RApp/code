import { Outlet, Link } from "react-router-dom";

export const Books = ({ className }) => {
    return (
        <div className={className}>
            <h1>Books</h1>
            <Link to="/cart">корзина</Link>
            <Outlet />
        </div>
  );
}