import {createBrowserRouter} from "react-router-dom";
import { Books, Order, Contacts } from "./pages";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Books />
    },
    {
        path: "order",
        element: <Order />
    },
    {
        path: "contacts/has/some/address",
        element: <Contacts />,
    }
]);