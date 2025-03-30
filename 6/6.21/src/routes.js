import {createBrowserRouter} from "react-router-dom";
import {ErrorBoundary, Root, Second, Third} from "./pages";
import {Layout} from "./layout";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Root />,
                errorElement: <ErrorBoundary />,
            },
            {
                path: "second",
                element: <Second />,
                errorElement: <ErrorBoundary />,
            },
            {
                path: "third",
                element: <Third />,
                errorElement: <ErrorBoundary />,
            }
        ]
    }
], {
    basename: "/"
});