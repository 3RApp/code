//  routes.js
import {createBrowserRouter} from "react-router-dom";
import {Main, ErrorBoundary} from "./pages";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        action: Main.action,
        loader: async ({ request }) => {
            const url = new URL(request.url);
            const searchTerm = url.searchParams.get("search");

            return searchTerm;
        },
        errorElement: <ErrorBoundary />,
    },
]);