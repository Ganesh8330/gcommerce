import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDetails = createAsyncThunk(
    'products/details',
    async(id) => {
        try {
            const response = await axios.get(`https://6636514b415f4e1a5e26ff23.mockapi.io/Product/${id}`);
            console.log(id);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

const initialState = {
    data: [],
    isLoading: false,
    error: null
};

const detailsSlice = createSlice({
    name: 'productDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDetails.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchDetails.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.error = null; // Reset error on success
            })
            .addCase(fetchDetails.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message; // Update error message
            });
    }
});

export default detailsSlice.reducer;
