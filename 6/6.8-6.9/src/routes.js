import {createBrowserRouter} from "react-router-dom";
import {Main, Books, Order, Contacts} from "./pages";
import {BookDetails, Page} from "./business";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
    },
    /** другой код маршрутизатора*/
    {
        path: "books",
        element: <Books />,
        children: [
            {
                path: ":bookId",
                element: <BookDetails />,
                children: [
                    {
                        path: ":pageId",
                        element: <Page />
                    }
                ]
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