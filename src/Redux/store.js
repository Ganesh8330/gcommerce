import { configureStore } from '@reduxjs/toolkit';
import {productsReducer} from './productSlice'
import detailsReducer from './detailsSlice'

export const store = configureStore({

    reducer:{
        products:productsReducer,
        details:detailsReducer,
    }

})