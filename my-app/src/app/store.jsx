import { configureStore } from "@reduxjs/toolkit";
import productDate from "../feature/getProductData/getData"

export const store = configureStore({
    reducer: {
        productDate: productDate
    }
})


store.subscribe(()=>{
    const card  = store.getState().productDate.card;
    localStorage.setItem("card",JSON.stringify(card))
    
})