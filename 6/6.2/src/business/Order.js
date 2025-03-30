import { Outlet, Link } from "react-router-dom";

export const Order = ({ className }) => {
    return (
        <div className={className}>
            <h1>Order</h1>
            <Link to="/order/cart">корзина</Link>
            <Outlet />
        </div>
  );
}