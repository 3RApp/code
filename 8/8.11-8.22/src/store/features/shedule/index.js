import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tabs: null,
    selectedID: null,
};

export const sheduleSlice = createSlice({
  name: 'shedule',
  initialState,
  reducers: {
    changeTabs: (state, action) => state.tabs = action.payload,
    changeSheduleID: (state, action) => state.selectedID = action.payload,
  },
});

export const { changeTabs, changeSheduleID } = sheduleSlice.actions;

export const selectTab = (state) => state.tabs;
export const selectSheduleID = (state) => state.selectedID;

export default sheduleSlice.reducer;
