import React, { useState } from 'react';
import dataSource from './dataSource';
import { useNavigate } from 'react-router-dom';

const NewProduct = (props) => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [wholesale, setWholesale] = useState("");
    const [shippingPrice, setShippingPrice] = useState("");
    const [vendor, setVendor] = useState("");
    const navigate = useNavigate();

    const handleFormSubmit = (event) => { 
        event.preventDefault(); 
        console.log("Submission of create form made.");
        const product = {
            id: id,
            name: name,
            description: description,
            quantity: quantity,
            wholesalePrice: wholesale,
            shippingPrice: shippingPrice,
            vendor: vendor
        };
        console.log(product);

        saveProduct(product);
    };

    const updateId = (event) => {
        setId(event.target.value);
    };

    const saveProduct = async (product) => {
        const response = await dataSource.post('/products', product);
        console.log(response);
        console.log(response.data);
        props.onNewProduct(navigate);
    }

    const updateName = (event) => {
        setName(event.target.value);
    };
    const updateDescription = (event) => {
        setDescription(event.target.value);
    };
    const updateQuantity = (event) => {
        setQuantity(event.target.value);
    };
    const updateWholesale = (event) => {
        setWholesale(event.target.value);
    };
    const updateShippingPrice = (event) => {
        setShippingPrice(event.target.value);
    };
    const updateVendor = (event) => {
        setVendor(event.target.value);
    };



    return (
        <div>
            <h1>Create Product Page</h1>
            <p>{ props.name }</p>
            <form onSubmit={handleFormSubmit}>
                <div className="form-group alignLabels">
                    <label htmlFor="name">Product Name</label>
                    <input onChange={updateName} id="name" type="text" className="form-control" aria-describedby="helpName" placeholder="Enter the name of the Product" name="name"></ input>
                </div>
                <div className="form-group alignLabels">
                    <label htmlFor="description">Description</label>
                    <textarea onChange={updateDescription} id="description" rows="3" className="form-control" aria-describedby="helpDescription" placeholder="Enter the description of the Product" name="description"></textarea>
                </div>
                <div className="form-group alignLabels">
                    <label htmlFor="quantity">Quantity</label>
                    <input onChange={updateQuantity} id="quantity" type="number" className="form-control" aria-describedby="helpQuantity" placeholder="Enter the quantity of the Product" required name="quantity"></input>
                </div>
                <div className="form-group alignLabels">
                    <label htmlFor="wholesalePrice">wholesalePrice</label>
                    <input onChange={updateWholesale} id="wholesalePrice" type="number" className="form-control" aria-describedby="helpWholesalePrice" placeholder="Enter each wholesale price for the product" required name="wholesalePrice"></input>
                </div>
                <div className="form-group alignLabels">
                    <label htmlFor="shippingPrice">shippingPrice</label>
                    <input onChange={updateShippingPrice} id="shippingPrice" type="int" className="form-control" aria-describedby="helpShippingPrice" placeholder="Enter each shipping price for the product" required name="shippingPrice"></input>
                </div>
                <div className="form-group alignLabels">
                    <label htmlFor="vendor">Vendor</label>
                    <input onChange={updateVendor} id="vendor" type="text" className="form-control" aria-describedby="helpVendor" placeholder="Enter the vendor of the Product" required name="vendor"></input>
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>
            </form>
        </div>
    )
}
export default NewProduct;