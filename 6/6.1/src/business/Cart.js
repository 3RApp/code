import { useState } from "react";

import "./Cart.css";

export const Cart = () => {
    const [open, setOpen] =  useState(false);
    const handleClick  =  ()  =>  {
        setOpen(!open);
    }
    return <div onClick={handleClick} className="cart">
        Корзина
        <div className={`list ${open ? "" : "hidden"}`}>
            <ol>
                <li>Книга один - 300 руб.</li>
                <li>Книга два - 400 руб.</li>
                <li>Книга три - 500 руб.</li>
                <hr />
                <span>Итого: 1200 руб.</span>
            </ol>
        </div>
    </div>;
}