import {createBrowserRouter} from "react-router-dom";
import {ErrorBoundary, Main, Result} from "./pages";

// routes.js
export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorBoundary />
    },
    {
        path: "/result",
        element: <Result />,
        errorElement: <ErrorBoundary />,
        action: async () => ({success: true}),
    }
]);