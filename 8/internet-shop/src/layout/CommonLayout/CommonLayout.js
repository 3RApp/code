import {Outlet} from "react-router-dom";
import { LayoutHeader } from "./LayoutHeader";
import { LayoutFooter } from "./LayoutFooter";

export const CommonLayout = () => {
    return (
        <section>
            <LayoutHeader />
            {/* @TODO *<SearchAndBasketLayout>header</LayoutHeader> */}
            <Outlet />
            <LayoutFooter />
        </section>
    );
};