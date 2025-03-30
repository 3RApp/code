import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <Link to="/mathematics">О математике</Link>
            <Link to="/descriptionlayout">Лэйаут</Link>
            <Link to="/technical">Войти</Link>
        </header>
    );
}