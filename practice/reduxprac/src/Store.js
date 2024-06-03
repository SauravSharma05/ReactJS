import { configureStore } from "@reduxjs/toolkit";
import { reducerFun } from "./Reducer";


export const store1 = configureStore({
    reducer:{
        count:reducerFun
    }
})