import "./Cart.css";

export const Cart = () => {

    return <div className="cart">
        Корзина
        <div className="list">
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