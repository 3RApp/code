//  routes.js
import { createBrowserRouter } from "react-router-dom";
import { Books, Order, Contacts, Cart } from "./business";
import { Layout } from "./layout";

export const routes = createBrowserRouter([{
    element: <Layout />,
    children: [{
        path: "/", element: <Books />,
        children: [{
            path: "cart",
            element: <Cart  />,
        }]
    },
    {
        path: "order", element: <Order  />,
        children:  [{
            path: "cart",
            element: <Cart  />,
        }],
    },
    {
        path: "contacts", element: <Contacts />,
        children:  [{
            path: "cart",
            element: <Cart  />,
        }],
    }]
}]);