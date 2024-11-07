import { useDispatch, useSelector } from "react-redux";
import AddProduct from "./AddProduct";
import ChangeProduct from "./ChangeProduct";

import { deleteProduct, updateProduct, changeProduct } from "../reducers/ProductsListSlice";

export default function ProductsList() {
    const products = useSelector((state) => state.productsList.arrayProducts);
    const dispatch = useDispatch();
    return (
        <section
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "20px",
            }}
        >
            <AddProduct />
            {products.map((product) => (
                <div key={product.id} style={{ width: "300px", display: "flex", gap: "20px", flexDirection: "column", justifyContent: "center" }}>
                    <h2 onClick={() => dispatch(changeProduct(product))}>{product.name}</h2>
                    <h3 onClick={() => dispatch(changeProduct(product))}>{product.description}</h3>
                    <p onClick={() => dispatch(changeProduct(product))}>{product.price}</p>
                    <span onClick={() => dispatch(changeProduct(product))}>{product.available}</span>
                    <div className='button-box'>
                        <button onClick={() => dispatch(deleteProduct(product))}>
                            Delete
                        </button>
                        <button onClick={() => dispatch(updateProduct(product.id))}>
                            Change
                        </button>
                    </div>
                    <ChangeProduct productId={product.id} />
                </div>
            ))}
            
        </section>
    );
}
