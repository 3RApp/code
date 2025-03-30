import {Link} from "react-router-dom";

import "./MenuLeft.css";

export const MenuLeft = () => {
    const menu = [
        {id: 0, path: "/", title: "Главная"}, 
        {id: 1, path: "second", title: "Вторая"}, 
        {id: 2, path: "third", title: "Третья"}];

    return (<aside>
        <nav>
            { menu.map(({id, path, title}) => 
                <Link className="menu-item" key={id} to={path}>{title}</Link>) }
        </nav>
    </aside>);
};