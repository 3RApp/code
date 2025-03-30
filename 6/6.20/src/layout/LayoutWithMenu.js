import {Fragment} from "react";
import {Outlet} from "react-router-dom";
import { MenuLeft, Footer } from "./components";

export const LayoutWithMenu = () => {
    return (
        <Fragment>
            <MenuLeft />
            <aside>
                <header>
                    <h1>LayoutWithMenu</h1>
                </header>
                <main>
                    <Outlet />
                </main>
                <Footer />
            </aside>
        </Fragment>
    );
};