import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk('products/fetchProducts',
    async () => {
        const response = await axios.get('https://6636514b415f4e1a5e26ff23.mockapi.io/Product')
        return response.data
    }
);

const initialState = {
    products: [],
    cart: [],
    status: 'idle',
    error: null,
    selectedCategory: 'All',
    user: null,
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addtocart: (state, action) => {
            state.cart.push(action.payload);
        },
        removeCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        },
        incrementCount: (state, action) => {
            const itemIndex = state.cart.findIndex(item => item.id === action.payload);
            if (itemIndex !== -1) {
                state.cart[itemIndex].quantity++;
            }
        },
        decrementCount: (state, action) => {
            const itemIndex = state.cart.findIndex(item => item.id === action.payload);
            if (itemIndex !== -1 && state.cart[itemIndex].quantity > 1) {
                state.cart[itemIndex].quantity--;
            }
        },
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
});

export const { addtocart, removeCart, incrementCount, decrementCount, login, logout } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
