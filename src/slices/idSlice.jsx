import { createSlice } from "@reduxjs/toolkit";

export const idSlice = createSlice({
    name: "id",
    initialState: {
        IDselected: '',
    },
    reducers: {
        setID: (state, action) => {
            state.IDselected = action.payload;
        },
    },
})

export const { setID } = idSlice.actions;

export default idSlice.reducer;
