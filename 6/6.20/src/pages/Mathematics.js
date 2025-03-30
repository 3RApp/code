import {Outlet, Link} from "react-router-dom";
import {Fragment} from "react";
import {Header} from "../components";

import "./Mathematics.css";

const disciplines = [{id: 0, path: "combinatorics", title: "Комбинаторика"}, {id: 1, path: "probability", title: "Теория вероятностей"},
{id: 2, path: "algebra", title: "Алгебра"}, {id: 3, path: "statistics", title: "Статистика"}, {id: 4, path: "calculus", title: "Математический анализ"},
{id: 5, path: "graphs", title: "Теория графов"}];

export const Mathematics = () => {
    
    return (
        <Fragment>
            <Header />
            <main>
                <h1>О математике</h1>
                <section>Если бы вы стали изучать математику, то какую бы дисциплину вы стали изучать? 
                    Почему бы не выяснить, что каждая из них из себя представляет?</section>
                <aside>
                    <ul>
                        {
                            disciplines.map(({id, path, title}) => <li key={id}><Link to={path}>{title}</Link></li>)
                        }
                    </ul>
                </aside>
                <aside>
                    <Outlet />
                </aside>
            </main>
        </Fragment>
    )
}