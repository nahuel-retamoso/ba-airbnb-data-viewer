import { createSlice } from "@reduxjs/toolkit";

export const paginationSlice = createSlice({
    name: "pagination",
    initialState: {
        pagination: 1
    },
    reducers: {
        paginationDown: (state) => {
            if (state.pagination > 1){
                state.pagination = state.pagination - 1;
            }
        },
        paginationUp: (state) => {
            state.pagination = state.pagination + 1;
        },
    }
    });

export const { paginationDown, paginationUp } = paginationSlice.actions;

export default paginationSlice.reducer;