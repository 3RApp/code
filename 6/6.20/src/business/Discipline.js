import { Outlet, Link } from "react-router-dom";

import "./Discipline.css";

const attributes = [{id: 0, path: "apply", title: "Где применяется"}, {id: 1, path: "ask", title: "Где спрашивают"}, {id: 2, path: "read", title: "Что читать"}];

export const Discipline = () => {

    return (
        <section>
            Подразделы: 
            {
                attributes.map(({id, path, title}) => <Link className="menu-attribute-item" key={id} to={path}>{title}</Link>)
            }
            <Outlet />
        </section>
    );
}
