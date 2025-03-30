import { Link } from "react-router-dom";
import { Description } from "../business/components";
export const Main = () => {
    return (<main>
        Main
        <Description text="Вы можете посетить следующие разделы:">
            <Link to="/books">Книги</Link>
            <Link to="/contacts">Контакты</Link>
            <Link to="/order">Заказ</Link>
        </Description>
    </main>);
};