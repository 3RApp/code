import {createBrowserRouter} from "react-router-dom";
import { Layout } from "./Layout";

export const router = createBrowserRouter([
   {
    element: <Layout />,
    children: [{
        path: '/',
        element: <div>Книги</div>,
    },
    {
        path: 'order',
        element: <div>Заказы</div>,
    },
    {
        path: 'contacts',
        element: <div>Контакты</div>,
    }]
  },
]);