import {Outlet} from "react-router-dom";
import { Footer } from "./components";

export const LayoutTechnical = () => {
    return (
        <aside>
            <header>
                <h1>LayoutTechnical</h1>
            </header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </aside>
    );
};