import {createBrowserRouter} from "react-router-dom";
import {Main, Books, Order, Contacts} from "./pages";
import {BookDetails} from "./business";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
    },
    /** другой код маршрутизатора*/
    {
        path: "books",
        element: <Books />,
        loader: async () => {
            const response  = await fetch(`/books`);
            const json  = await response.json();

            return json;
        },
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