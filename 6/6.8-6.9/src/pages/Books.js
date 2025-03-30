import {Outlet, Link} from "react-router-dom";
import { Description } from "../business/components";

export const Books = () => {
    return (<main>
        Чтобы прочитать подробное описание по книге, кликните по ней.
        <Description text="Вы можете посетить следующие разделы:">
            <Link to="/books">Книги</Link>
            <Link to="/books/1">Человек-амфибия</Link>
            <Link to="/books/2">Под южными небесами</Link>
            <Link to="/books/3">Трое в лодке не считая собаки</Link>
        </Description>
        <Outlet />
    </main>);
};