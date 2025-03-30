import {Link} from "react-router-dom";

import "./MenuLeft.css";

export const MenuLeft = () => {
    const menu = [
        {id: 0, path: "mathematics", title: "Раздел являющийся псевдолэйаутом"}, 
        {id: 1, path: "descriptionlayout", title: "Текущяя страница с лэйаутом"}, 
        {id: 2, path: "technical", title: "И страница и лэйаут"}];

    return (<aside>
        <nav>
            { menu.map(({id, path, title}) => 
                <Link key={id} to={path}>{title}</Link>) }
        </nav>
    </aside>);
};