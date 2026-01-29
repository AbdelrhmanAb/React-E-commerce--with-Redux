import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const FetchProductsDate = createAsyncThunk("FetchAsyncThunk", async () => {
    const response = await axios.get("https://fakestoreapi.com/products")
    // console.log(response.data);

    return response.data

})

const initialState = {
    result: "emty",
    products: null,
    isloading: false
}




const ProductSlice = createSlice({
    name: "getProduct",
    initialState,
    reducers: {
        addToCard: (state, action) => {
            // console.log(state.products);
            
            

        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(FetchProductsDate.pending, (state) => {
                state.isloading = true
            })

            .addCase(FetchProductsDate.fulfilled, (state, action) => {
                state.isloading = false
                state.products = action.payload;


            })
            .addCase(FetchProductsDate.rejected, (state) => {
                state.isloading = false
            })

    }
})


export default ProductSlice.reducer


export const { addToCard } = ProductSlice.actions 