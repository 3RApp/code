import { createSlice } from "@reduxjs/toolkit";

export const orderIdSlice = createSlice({
    name: "orderId",
    initialState: null,
    reducers: {
        addOrderId: (state, action) => {
            state = action.payload;

            return state;
        },
        clearOrderId: () => null,
    }
});

export const { addOrderId } = orderIdSlice.actions;

export const selectOrderId = (state) => state.orderId;

export default orderIdSlice.reducer;
