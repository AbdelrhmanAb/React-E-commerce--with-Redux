import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const FetchProductsDate = createAsyncThunk("FetchAsyncThunk", async () => {
    const response = await axios.get("https://fakestoreapi.com/products")
    // console.log(response.data);

    return response.data

})

const initialState = {
    result: "emty",
    products: [],
    CategoryList: [],
    card:[],
    isloading: false,
}




const ProductSlice = createSlice({
    name: "getProduct", 
    initialState,
    reducers: {
        addToCard: (state, action) => {
            const product = action.payload
            console.log(product);
            
            if (!product||!product.id) {
                return;
                
            }

            const exist = state.card.find((item)=>{
                return item.id === product.id
            })
            console.log(exist);
            

            if (exist) {

                exist.quantity  +=1
            }else{
                state.card.push({...product,quantity:1})
            }





        },

        delelte:(state, action)=>{
            const id = action.payload
            state.card = state.card.filter((item)=>{
                return item.id !== id
            })

        },
        catogProducts: (state, action) => {

            const category = action.payload
            if (category === 'all') {
                state.CategoryList = state.products

            } else {

                state.CategoryList = state.products.filter(
                    (item) => {
                        return item.category == category
                    }
                )
            }
        },
        SearchOfProduct: (state, action) => {
            const searchTherm = action.payload.toLowerCase()
            state.CategoryList = state.products.filter((item) => {
                return item.title.toLowerCase().includes(searchTherm)
            })

        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(FetchProductsDate.pending, (state) => {
                state.isloading = true
            })

            .addCase(FetchProductsDate.fulfilled, (state, action) => {
                state.isloading = false
                state.products = action.payload;
                state.CategoryList = action.payload;


            })
            .addCase(FetchProductsDate.rejected, (state) => {
                state.isloading = false
            })

    }
})


export default ProductSlice.reducer


export const { addToCard, catogProducts, SearchOfProduct, delelte } = ProductSlice.actions 