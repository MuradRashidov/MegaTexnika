import { configureStore } from "@reduxjs/toolkit";
import techniquesReducer from "./features/techniqueSlice";

export const store = configureStore({
    reducer:{
        techniques: techniquesReducer

    }
});