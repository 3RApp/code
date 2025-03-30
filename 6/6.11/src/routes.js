import {createBrowserRouter} from "react-router-dom";
import {RequestDemo} from "./pages";
import {loader} from './6.11';

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <RequestDemo />,
        loader
    }
]);