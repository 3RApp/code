import { createBrowserRouter, Outlet } from 'react-router-dom';
import { SubcategoryPage } from './pages';

export const routes = createBrowserRouter([{
    path: '/',
    element: <div>CommonLayout <Outlet /></div>,
    children: [{
        path: '/',
        element: <div>SearchAndBasketLayout<Outlet /></div>,
        children: [{
            index: true,
            element: <div>MainPage</div>,
        }, {
            path: 'catalog',
            element: <div>CatalogPage</div>,
        }, {
            path: 'search',
            element: <div>SearchResultPage</div>,
        }],
    }, {
        path: '/catalog/:category',
        element: <div>CategoryPage</div>,
    }, {
        path: '/catalog/:category/:subcategory',
        element: <SubcategoryPage />,
    }, {
        path: '/catalog/:category/:subcategory/:productId',
        element: <div>ProductPage</div>,
    }, {
        path: '/basket',
        element: <div>BasketPage</div>,
    }, {
        path: '/order-form',
        element: <div>OrderFormPage</div>,
    }, {
        path: '/confirmation',
        element: <div>ConfirmationPage</div>,
    }]
}]);