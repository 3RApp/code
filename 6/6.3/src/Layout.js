import { Link, Outlet } from'react-router-dom';

export const Layout = () => {
    return (
        <div>
            <header>
                <nav><Link to="/">книги </Link><Link to="/order">заказы </Link><Link to="/contacts">контакты</Link></nav>
            </header>
            <Outlet />
            <footer>
                <hr />
                Это футер
            </footer>
        </div>
    );
}