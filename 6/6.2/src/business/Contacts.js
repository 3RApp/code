import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

export const Contacts = ({ className }) => {
    useEffect(() => {
        //
        setTimeout(() => {
            window.history.back();
        }, 2000);
    });
    return (
        <div className={className}>
            <h1>Contacts</h1>
            <Link to="/contacts/cart">корзина</Link>
            <Outlet />
        </div>
  );
}