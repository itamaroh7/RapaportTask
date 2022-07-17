import { createSlice } from "@reduxjs/toolkit";

export const diamondsSlice = createSlice({
    name:"diamondsState",
    initialState:{
        diamonds:[],
        statistics:{}
    },
    reducers:{
        initDiamonds: (state, action) => {
            state.diamonds =action.payload
        },
        initStatistics: (state, action) => {
            state.statistics =action.payload
        },
    }
})

export const {initDiamonds, initStatistics} = diamondsSlice.actions;

export default diamondsSlice.reducer;