import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./Layout";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            element={<Layout />}
        >
            <Route path="/" element={<div>Книги</div>}  />
            <Route path="/contacts" element={<div>Контакты</div>} />
            <Route path="/order" element={<div>Заказы</div>}  />
        </Route>
    )
);
