import {createBrowserRouter} from "react-router-dom";
import {Main, Books, Order, Contacts} from "./pages";
import {BookDetails} from "./business";

import { loader } from "./6.12";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
    },
    /** другой код маршрутизатора*/
    {
        path: "books",
        element: <Books />,
        
        loader: loader,

        children: [
            {
                path: ":bookId",
                element: <BookDetails />,
                loader: async ({ params }) => {
                    const response = await fetch(`/books/${params.bookId}`);                   
                    const json = await response.json();
                                        
                    return json;
                },
            },
        ]
    },
    /** другой код маршрутизатора*/
    {
        path: "order",
        element: <Order />
    },
    {
        path: "contacts",
        element: <Contacts />
    }
]);