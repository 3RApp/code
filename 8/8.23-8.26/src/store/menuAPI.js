import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const menuAPI = createApi({
    reducerPath: 'menuAPI',
    baseQuery: fetchBaseQuery({baseUrl: '' }),
    tagTypes: ['Menu'],
    endpoints: (builder) => ({
    getMenuCategories: builder.query({
        query: () => {
            return 'users';
        },
    }),
    getMenuSubcategories: builder.query({
        query: (category) => {
            return 'users';
        },
    }),
  }),
});

export const {useGetMenuCategoriesQuery, useGetMenuSubcategoriesQuery} = menuAPI;

export default menuAPI.reducer;