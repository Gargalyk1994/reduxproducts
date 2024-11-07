import { configureStore } from "@reduxjs/toolkit";
// import favoritesSlice from "../reducers/favoritesSlice.js";
import productsListReducer from "../reducers/ProductsListSlice.js"

export const store = configureStore({
    reducer: {
        productsList: productsListReducer,
    },
});
