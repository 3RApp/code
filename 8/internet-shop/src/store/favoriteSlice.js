import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const favorite = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addToFavorite: (state, action) => {
            const { id } = action.payload;
            state[id] = JSON.stringify(new Date());
        },
        removeFromFavorite: (state, action) => {
            const { id } = action.payload;
            delete state[id];
        }
    }
});

export const { addToFavorite, removeFromFavorite } = favorite.actions;

export const selectFavoriteById = (state, productId) => state.favorite[productId];

export default favorite.reducer;