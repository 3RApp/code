import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    service: null,
    cost: 0
};

const delivery = createSlice({
    name: 'delivery',
    initialState,
    reducers: {
        setService: (state, action) => {
            const { id, cost } = action.payload;
            state.service = id;
            state.cost = cost;
        },
        clearService: (state) => {
            state = initialState;
        }
    }
});

export const { setService, clearService } = delivery.actions;

export const selectDeliveryService = (state) => state.delivery.service;
export const selectDeliveryCost = (state) => state.delivery.cost;
export const selectDelivery = (state) => state.delivery;

export default delivery.reducer;