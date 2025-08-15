import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    subcategory: {
        type: "manufacturer",
        value: null,
    }
}

const filter = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.subcategory.value = action.payload;
        },
        clearFilter: (state) => {
            state.subcategory.value = null;
        }
    }
});

export const { setFilter, clearFilter } = filter.actions;

export const selectFilter = (state) => state.filter.subcategory.value;

export default filter.reducer;