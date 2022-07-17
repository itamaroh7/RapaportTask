import { configureStore } from "@reduxjs/toolkit";
import diamondReducer from "./diamondReducer";

export default configureStore({
    reducer:{
        diamondsState: diamondReducer,
    }
})