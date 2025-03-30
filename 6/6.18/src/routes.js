import {createBrowserRouter} from "react-router-dom";
import {ErrorBoundary, Main} from "./pages";
import { fromFormDatatoJSON } from "./utils";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        loader: async () => {

            const responseProducts = await fetch('/products');
            const responseOrders = await fetch('/orders');
            const products = await responseProducts.json();
            const orders = await responseOrders.json();
            
            return {products, orders};
        },
        action: async ({ request }) => {

            const {method} = request;
            const formDataBody = await request.formData();

            const headers = new Headers();
            headers.append("Content-Type", "application/json");

            const body = fromFormDatatoJSON(formDataBody);

            const response = await fetch('/orders', {method, headers, body});
            const json = await response.json();

            return json;
        },
        errorElement: <ErrorBoundary />
    }
]);