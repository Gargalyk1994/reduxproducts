import { useDispatch } from "react-redux";
import { addProduct } from "../reducers/ProductsListSlice";
import { useState } from "react";
// import { useEffect } from "react";

export default function AddProduct() {
    const dispatch = useDispatch();
    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [available, setAvailable] = useState("");

    // useEffect({
    //     return () =>{
    //     }
    // },[])

    function inputHandler(e) {
        setProductName(e.target.value);
    }
    function inputDescriptionHandler(e) {
        setDescription(e.target.value);
    }
    function inputPriceHandler(e) {
        setPrice(e.target.value);
    }
    function inputAvailableHandler(e) {
        setAvailable(e.target.value);
    }

    function addNewProduct() {
        dispatch(addProduct({
            id: Date.now(),
            name: `${productName}`,
            description: `${description}`,
            price: `${price}`,
            available: `${available}`,
        }));
        setProductName("");
        setDescription("");
        setPrice("");
        setAvailable("");
    }

    return (
        <>
            <form>
                <h2>Add new product</h2>
                <label htmlFor="name">Enter name</label>
                <input
                    id="name"
                    type="text"
                    value={productName}
                    onChange={(e) => inputHandler(e)}
                />
                <label htmlFor="description">Enter description</label>
                <input
                    id="description"
                    type="text"
                    value={description}
                    onChange={(e) => inputDescriptionHandler(e)}
                />
                <label htmlFor="price">Enter price</label>
                <input
                    id="price"
                    type="text"
                    value={price}
                    onChange={(e) => inputPriceHandler(e)}
                />
                <label htmlFor="name">Enter available</label>
                <input
                    id="available"
                    type="text"
                    value={available}
                    onChange={(e) => inputAvailableHandler(e)}
                />
            </form>
            <button onClick={(e) => addNewProduct(e)}>Add new product</button>
        </>
    );
}
