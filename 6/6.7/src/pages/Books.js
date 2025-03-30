import {Outlet, Link} from "react-router-dom";
import { Description } from "../business/components";

export const Books = () => {
    return (<main>
        Чтобы прочитать подробное описание по книге, кликните по ней.
        <Description text="Вы можете посетить следующие разделы:">
            <Link to="/books">Книги</Link>
            <Link to="/books/belyaev-chelovek-amfibiya">Человек-амфибия</Link>
            <Link to="/books/leykin-pod-yujnyimi-nebesami">Под южными небесами</Link>
        </Description>
        <Outlet />
    </main>);
};