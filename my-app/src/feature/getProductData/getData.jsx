import { createSlice } from "@reduxjs/toolkit";
import {axios} from "axios"




const initialState = {
    result: "emty",
    product: {},
    isloading: false
}




const ProductSlice = createSlice({
    name: "getProduct",
    initialState,
    reducers: {
        getDate: (state, action) => {
            state.result = "changed"

        }
    }
})


export default ProductSlice.reducer


export const {getDate} = ProductSlice.actions 