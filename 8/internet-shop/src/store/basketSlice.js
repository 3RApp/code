import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: {}, // { id: [price, count, data] }, где data = { uid, title, price, currencyCode, image }
    total: 0, // общая стоимость всех товаров в корзине
    count: 0 // полное число единиц товаров в корзине
};

const basket = createSlice({
    initialState,
    name: 'basket',
    reducers: {
        addProduct: (state, action) => {
            const { id, count, price, data } = action.payload;

            if (id in state.products){
                state.products[id] = [state.products[id][0], state.products[id][1] + count, state.products[id][2]];

                return;
            }

            state.total += price * count;
            state.count += count;

            state.products[id] = [price, count, data];
        },
        deleteProduct: (state, action) => {
            const { id } = action.payload;

            if (id in state.products){

                state.count -= state.products[id][1];
                state.total -= state.products[id][0] * state.products[id][1];

                delete state.products[id];
            }
        },
        changeCount: (state, action) => {
            const { id, count } = action.payload;

            if (id in state.products){
            
                state.count += (count - state.products[id][1]);
                state.total += state.products[id][0] * (count - state.products[id][1]);

                state.products[id] = [state.products[id][0], count, state.products[id][2]];
            }
        },
    }
});

export const { addProduct, deleteProduct, changeCount } = basket.actions;

export const selectProducts = (state) => state.basket.products;
export const selectTotal = (state) => state.basket.total;
export const selectProductsCount = (state) => state.basket.count;
export const selectIsProductInBasket = (uid) => (state) => uid in state.basket.products;

export default basket.reducer;