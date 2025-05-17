import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tab: 0,
    selectedID: null,
};

export const sheduleSlice = createSlice({
  name: 'shedule',
  initialState,
  reducers: {
    changeTab: (state, action) => {
      state.tab = action.payload;
    },
    changeSheduleID: (state, action) => {
      state.selectedID = action.payload;
    }
  },
});

export const { changeTab, changeSheduleID } = sheduleSlice.actions;

export const selectTab = (state) => state.shedulePage.tab;
export const selectSheduleID = (state) => state.shedulePage.selectedID;

export default sheduleSlice.reducer;
