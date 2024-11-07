import { createSlice } from "@reduxjs/toolkit";

export const productsListSlice = createSlice({
    name: "productsList",
    initialState: {
        arrayProducts: [
            {
                id: 110,
                name: "Product #1",
                description:
                    "This product is very good!!! It is comfortable and nice.",
                price: 3000,
                available: true,
            },
            {
                id: 111,
                name: "Product #2",
                description:
                    "This product is very good!!! It is comfortable and nice.",
                price: 2000,
                available: true,
            },
            {
                id: 112,
                name: "Product #3",
                description:
                    "This product is very good!!! It is comfortable and nice.",
                price: 6000,
                available: true,
            },
            {
                id: 113,
                name: "Product #4",
                description:
                    "This product is very good!!! It is comfortable and nice.",
                price: 4000,
                available: true,
            },
            {
                id: 114,
                name: "Product #5",
                description:
                    "This product is very good!!! It is comfortable and nice.",
                price: 8000,
                available: true,
            },
            {
                id: 115,
                name: "Product #6",
                description:
                    "This product is very good!!! It is comfortable and nice.",
                price: 9000,
                available: true,
            },
        ],
    },
    reducers: {
        addProduct: (state, { payload: newProduct }) => {
            if (state.arrayProducts.some((item) => item.id === newProduct.id)) {
                return;
            }
            state.arrayProducts.push(newProduct);
        },
        deleteProduct: (state, { payload: product }) => {
            const filteredArray = state.arrayProducts.filter(
                (item) => item.id !== product.id
            );
            state.arrayProducts = filteredArray;
        },
        // updateProduct: (state, { payload: product }) => {
        //     const filteredArray = state.arrayProducts.filter(
        //         (item) => item.id !== product.id
        //     );
        //     state.arrayProducts = filteredArray;
        // },
        changeProduct: (state, { payload: product }) => {
            // const updatedProduct = state.arrayProducts.find(
            //     (item) => item.id === product.id
            // );
            // if (updatedProduct) {
            //     updatedProduct.name = product.name;
            //     updatedProduct.description = product.description;
            //     updatedProduct.price = product.price;
            //     updatedProduct.available = product.available;
            // }
            const index = state.arrayProducts.findIndex(
                (item) => item.id === product.id
            );
            if (index !== -1) {
                state.products[index] = product;
            }
            // state.arrayProducts = filteredArray;
        },
    },
});

export const { addProduct, deleteProduct, updateProduct, changeProduct } =
    productsListSlice.actions;

export default productsListSlice.reducer;
