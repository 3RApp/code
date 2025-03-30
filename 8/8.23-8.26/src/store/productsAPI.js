import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const productsAPI = createApi({
    reducerPath: 'productsAPI',
    baseQuery: fetchBaseQuery({baseUrl: '' }),
    refetchOnMountOrArgChanges: true,
    tagTypes: ['Products'],
    endpoints: (builder) => ({
    getProductsSubcategories: builder.query({
        query: (params, second) => {
            const {category, subcategory} = params;

            console.log(category, subcategory, params);
            return subcategory === 'def' ? 'users' : 'posts';
        },
    }),
  }),
});

export const {useGetProductsSubcategoriesQuery} = productsAPI;

export default productsAPI.reducer;