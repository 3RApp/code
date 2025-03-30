import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    search: 'square', // страница поиска
    category: 'square', // категория
    subcategory: 'square', // подкатегория
};

const viewModeSlice = createSlice({
    name: 'viewMode',
    initialState,
    reducers: {
        setViewMode(state, action) {
            //@TODO добавить 
            const { page, viewMode } = action.payload; 
            state[page].viewMode = viewMode;
        },
    }
});

export const {
    setViewMode
} = viewModeSlice.actions;

export const selectViewMode = (page) => (state) => state.viewMode[page];
    
export default viewModeSlice.reducer;