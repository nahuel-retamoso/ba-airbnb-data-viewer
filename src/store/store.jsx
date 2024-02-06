import { configureStore } from "@reduxjs/toolkit";
import optionReducer from "../slices/optionSlice";
import idReducer from "../slices/idSlice";
import paginationReducer from "../slices/PaginationSlice";

export default configureStore({
    reducer: {
        options: optionReducer,
        id: idReducer,
        pagination: paginationReducer,
    }
})