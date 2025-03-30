import {createBrowserRouter} from "react-router-dom";
import {Main, Books, Order, Contacts} from "./pages";
import {BookDetails, ErrorBoundary} from "./business";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
    },
    {
        path: "books",
        element: <Books />,

        errorElement: <ErrorBoundary />,
        
        loader: async () => {
           
            throw new Response("Not Found", { status: 404 });
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
    {
        path: "order",
        element: <Order />
    },
    {
        path: "contacts",
        element: <Contacts />
    }
]);