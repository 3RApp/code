import {Fragment} from "react";
import {Outlet} from "react-router-dom";
import { Menu } from "./Menu";

import './Layout.css';

export const Layout = () => {
    return (<Fragment>
        <header>
            <h2>Демонстрация способов обмена данными между компонентами</h2>
            <Menu />
        </header>
            <Outlet/>
        <footer>
            <hr />
            <section>
                "Современная фронтенд-разработка", изд-во "Питер"
            </section>
        </footer>
    </Fragment>);
};