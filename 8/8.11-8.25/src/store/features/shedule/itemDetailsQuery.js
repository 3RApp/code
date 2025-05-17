import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const sheduleItemDetailsAPI = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }), 
  endpoints: (builder) => ({
    getDataById: builder.query({
      query: (id) => {
        console.log("FROM RTK:", id);
        return `posts/${id}`;
      }, 
    }),
  }),
});

export const { useGetDataByIdQuery } = sheduleItemDetailsAPI;