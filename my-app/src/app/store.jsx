import { configureStore } from "@reduxjs/toolkit";
import productDate from "../feature/getProductData/getData"

export const store = configureStore({
    reducer: {
        productDate: productDate
    }
})