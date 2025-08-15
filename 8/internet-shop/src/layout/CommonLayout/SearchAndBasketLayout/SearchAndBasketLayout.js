import {Outlet} from "react-router-dom";
import { ProductSearchForm } from "./ProductSearchForm";
import { BasketValue } from "./BasketValue";

import "./SearchAndBasketLayout.module.css";

export const SearchAndBasketLayout = () => {

    return (
        <>
            <header>
                <ProductSearchForm />
                <BasketValue />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
};