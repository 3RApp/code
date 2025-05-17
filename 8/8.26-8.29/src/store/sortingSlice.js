import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    search: {
        type: null, // Тип сортировки 'price', 'popularity', null
        order: null // Порядок сортировки: 'asc', 'desc', null
    }, // страница поиска
    category: {
        type: null,
        order: null 
    }, // категория
    subcategory: {
        type: null,
        order: null 
    } // подкатегория
};

const sortingSlice = createSlice({
    name: 'sorting',
    initialState,
    reducers: {
        setSortingType(state, action) {
            const { page, type } = action.payload; 
            state[page].type = type;
        },
        setSortingOrder(state, action) {
             const { page, order } = action.payload; 
             state[page].order = order;
        },
        resetSorting(state, action) {
            const { page } = action.payload;
            state[page].type = null; 
            state[page].order = null; 
        },
    }
});

export const {
    setSortingType,
    setSortingOrder,
    resetSorting,
} = sortingSlice.actions;

export const selectSortingType = (page) => (state) => state.sorting[page].type;
export const selectSortingOrder = (page) => (state) => state.sorting[page].order;

export default sortingSlice.reducer;