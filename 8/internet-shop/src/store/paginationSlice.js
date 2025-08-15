import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: 0,
    category: 0,
    subcategory: 0
};

const pagination = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setSearchPagination: (state, action) => {
            state.search = action.payload;
        },
        setCategoryPagination: (state, action) => {
            state.category = action.payload;
        },
        setSubcategoryPagination: (state, action) => {
            state.subcategory = action.payload;
        }
    }
});

export const { setSearchPagination, setCategoryPagination, setSubcategoryPagination } = pagination.actions;

export const selectSearchPagination = (state) => state.pagination.search;
export const selectCategoryPagination = (state) => state.pagination.category;
export const selectSubcategoryPagination = (state) => state.pagination.subcategory;

export default pagination.reducer;
