import { createBrowserRouter } from 'react-router-dom';
import { CommonLayout, SearchAndBasketLayout } from './layout';
import { 
    MainPage, 
    CatalogPage, 
    SearchResultPage, 
    CategoryPage, 
    SubcategoryPage,
    ProductPage,
    BasketPage,
    OrderFormPage,
    ConfirmationPage
} from './pages';
import { ErrorBoundary } from './business';

export const routes = createBrowserRouter([{
    path: '/',
    element: <CommonLayout />,
    children: [{
        path: '/',
        element: <SearchAndBasketLayout />,
        errorElement: <ErrorBoundary />,
        children: [{
            index: true,
            element: <MainPage />,
            loader: async () => {
                const segments = ['special', 'popular', 'lastordered'];
                const requests = segments.map(segment => Promise.resolve({ segment, getRequest: fetch(`/api/v1/products/${segment}`) }));

                const result = {};

                for await (const request of requests) {
                    const { segment, getRequest } = request;
                    
                    await getRequest.then(response => response.json()).then(json => {
                        result[segment] = json;
                    });
                }

                return result;
            }
        }, {
            path: 'catalog',
            element: <CatalogPage />,
            loader: async () => {
                
                const requests = [{ 
                    type: "categories", endpoint: "/api/v1/menu/categories"
                }, {
                    type: "popular", endpoint: "/api/v1/products/categories/popular"
                }].map(({ type, endpoint }) => ({ type, getRequest: fetch(endpoint) }));

                const result = {};

                for await (const request of requests) {
                    const { type, getRequest } = request;
                
                    await getRequest.then(response => response.json()).then(json => {
                        if (json) {
                            result[type] = json;
                        }
                    })
                }

                return result;
            }
        }, {
            path: 'search',
            element: <SearchResultPage />,
            loader: async ({ request }) => {
                const url = new URL(request.url);
                const queryParam = new URLSearchParams(url.search).get("query");

                const search = await fetch(`/api/v1/products/search?query=${queryParam}`);
                const searchJson = await search.json();

                const categories = await fetch(`/api/v1/menu/categories`);
                const categoriesJson = await categories.json();

                if (searchJson && categoriesJson) {
                    return {
                        query: queryParam,
                        categories: categoriesJson,
                        products: searchJson,
                    }
                }
            }
        }, {
            path: '/catalog/:categoryId',
            element: <CategoryPage />,
            loader: async ({ params }) => {
                const { categoryId } = params;

                const categories = await fetch(`/api/v1/menu/categories`);
                const categoriesJson = await categories.json();

                const subcategories = await fetch(`/api/v1/menu/categories/${categoryId}/subcategories`);
                const subcategoriesJson = await subcategories.json();

                const popular = await fetch(`/api/v1/products/categories/${categoryId}/subcategories/popular`);
                const popularJson = await popular.json();

                if (popularJson && subcategoriesJson && categoriesJson) {

                    return {
                        categories: categoriesJson,
                        subcategories: subcategoriesJson,
                        popular: popularJson,
                    }
                }
            }
        }, {
            path: '/catalog/:categoryId/:subcategoryId',
            element: <SubcategoryPage />,
            loader: async ({ params }) => {
                const { categoryId, subcategoryId } = params;
                
                const categories = await fetch(`/api/v1/menu/categories`);
                const categoriesJson = await categories.json();

                const subcategories = await fetch(`/api/v1/menu/categories/${categoryId}/subcategories`);
                const subcategoriesJson = await subcategories.json();

                const products = await fetch(`/api/v1/products/categories/${categoryId}/subcategories/${subcategoryId}`);
                const productsJson = await products.json();

                const vendors = await fetch(`/api/v1/products/categories/${categoryId}/subcategories/${subcategoryId}/vendors`);
                const vendorsJson = await vendors.json();

                if (productsJson && subcategoriesJson && categoriesJson) {
                    return {
                        categories: categoriesJson,
                        subcategories: subcategoriesJson,
                        products: productsJson,
                        vendors: vendorsJson,
                    }
                }
            }
        }, {
            path: '/catalog/:categoryId/:subcategoryId/:productId',
            element: <ProductPage />,
                        loader: async ({ params }) => {
                const { categoryId, productId } = params;
                
                const categories = await fetch(`/api/v1/menu/categories`);
                const categoriesJson = await categories.json();

                const subcategories = await fetch(`/api/v1/menu/categories/${categoryId}/subcategories`);
                const subcategoriesJson = await subcategories.json();

                const product = await fetch(`/api/v1/products/${productId}`);
                const productJson = await product.json();

                if (productJson && subcategoriesJson && categoriesJson) {
                    return {
                        menu: {
                            categories: categoriesJson,
                            subcategories: subcategoriesJson,
                        },
                        product: productJson,
                    }
                }
            }
        }],
    }, {
        path: '/basket',
        element: <BasketPage />,
    }, {
        path: '/order-form',
        element: <OrderFormPage />,
    }, {
        path: '/confirmation',
        element: <ConfirmationPage />,
    }]
}]);