import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { changeProduct } from "../reducers/ProductsListSlice";

export default function ChangeProduct({productId}){
    const dispatch = useDispatch();
    const products = useSelector(state => state.productsList.arrayProducts);
    // Состояние для хранения имени продукта
    const [productName, setProductName] = useState("");
    // Состояние для хранения описания продукта
    const [description, setDescription] = useState("");
    // Состояние для хранения цены продукта
    const [price, setPrice] = useState("");
    // Состояние для хранения доступности продукта
    const [available, setAvailable] = useState("");
    
    // useEffect(() => {
    //     const product = useSelector(state => state.productsList.find(product => product.id === products.id));
    //     if(product){
    //         setProductName(product.name);
    //         setDescription(product.description);
    //         setPrice(product.price);
    //         setAvailable(product.available);
    //     }
    // }, [products.id])
    
    function updateProduct() {
        dispatch(changeProduct({
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

    return (
        <form>
            <input
                autoFocus
                id="name"
                type="text"
                placeholder="Product name"
                value={products.productName}
                onChange={(e) => inputHandler(e)}
            />
            <input
                autoFocus
                id="description"
                type="text"
                placeholder="Product description"
                value={description}
                onChange={(e) => inputDescriptionHandler(e)}
            />
            
            <input
                autoFocus
                id="price"
                type="text"
                placeholder="Product price"
                value={price}
                onChange={(e) => inputPriceHandler(e)}
            />
            <input
                autoFocus
                id="available"
                placeholder="Available"
                type="text"
                value={available}
                onChange={(e) => inputAvailableHandler(e)}
            />
            <button onClick={() => updateProduct()}>Change product</button>
        </form>
    );
};
    
//   const [arr, setArr] = useState(inputArr);

//   const addInput = () => {
//     setArr(s => {
//       return [
//         ...s,
//         {
//           type: "text",
//           value: ""
//         }
//       ];
//     });
//   };

//   const handleChange = e => {
//     e.preventDefault();

//     const index = e.target.id;
//     setArr(s => {
//       const newArr = s.slice();
//       newArr[index].value = e.target.value;

//       return newArr;
//     });
//   };

//   return (
//     <div>
//       <button onClick={addInput}>+</button>
//       {arr.map((item, i) => {
//         return (
//           <input
//             onChange={handleChange}
//             value={item.value}
//             id={i}
//             type={item.type}
//             size="40"
//           />
//         );
//       })}
//     </div>
//   );
// }