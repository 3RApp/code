import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    secondName: '',
    phone: ''
};

const customer = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        setName(state, action){
            const { name } = action.payload;
            state.name = name;
        },
        setSecondName(state, action){
            const { name } = action.payload;
            state.secondName = name;
        },
        setPhone(state, action){
            const { phone } = action.payload;
            state.phone = phone;
        },
        clearCustomer: (state) => {
            state.name = '';
            state.secondName = '';
        },
        clearPhone: (state) => {
            state.phone = '';
        }
    }
});

export const { setName, setSecondName, setPhone, clearCustomer, clearPhone } = customer.actions;

export const selectCustomer = (state) => state.customer;
export const selectPhone = (state) => state.customer.phone;

export default customer.reducer;