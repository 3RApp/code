import {createBrowserRouter} from "react-router-dom";
import {Main, Books, Order, Contacts} from "./pages";
import {BookAmfibiya, BookPodYujnyimiNebesami, PricesShops} from "./business";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
    },
    {
        path: "books",
        element: <Books />,
        children: [
            {
                path: "belyaev-chelovek-amfibiya",
                element: <BookAmfibiya />,
                children:  [{
                    path: "prices",
                    element: <PricesShops />,
                }]
            },
            {
                path: "leykin-pod-yujnyimi-nebesami",
                element: <BookPodYujnyimiNebesami />,
                children:  [{
                    path: "prices",
                    element: <PricesShops />,
                }]
            }
        ]
    },
    {
        path: "order",
        element: <Order />
    },
    {
        path: "contacts",
        element: <Contacts />
    }
]);