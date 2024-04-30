import Card from './Card';
import products from './products.json'
import NewProduct from './NewProduct';
import React, { useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import dataSource from './dataSource';
import NavBar from './NavBar';
import NewProduct from './NewProduct';
//import EditProduct from './EditProduct';

const App = (props) => {
	const [currentlySelectedProductId, setCurrentlySelectedProductId] = useState(0);
	const [productList, setProductList] = useState([]);

	let refresh = false;

	useEffect(() => {
        setProductList(products);
    }, [refresh]);
	
	const loadProducts = async () => {
		const response = await dataSource.get('./products');
		setProductList(response.data);
	}

	const updateSingleProduct = (id, navigate, uri) => {
		console.log('Update Single Product = ', id);
		console.log('Update Single Product = ', navigate);
		var indexNumber = 0;
		for (var i = 0; i < productList.length; i++) {
			if (productList[i].id === id)
				indexNumber = i;
		}

		setCurrentlySelectedProductId(indexNumber);
		let path = uri + indexNumber;
		console.log('path ', path);
		navigate(path);
	};

	const renderedList = () => {
		return productList.map((product) => (
		  <Card
			key={product.id}
			name={product.name}
			description={product.description}
			quantity={product.quantity}
			wholesalePrice={product.wholesalePrice}
			shippingPrice={product.shippingPrice}
			vendor={product.vendor}
			buttonText='OK'
		  />
		));
	  };
	
	  const onNewProduct = (navigate) => {
        loadProducts();
        navigate("/");
    }

	  return (
		<>
		<BrowserRouter>
        	<NavBar />
			<Routes>
				<Route
					exact 
					path='/' 
					element = {
						<NewProduct 
							productList = {renderedList}
							updateSingleProduct={updateSingleProduct}
						/>
					}
				/>
				<Route exact path='/create' element={<NewProduct onNewProduct={onNewProduct}/>}/>
				<Route exact path='/products/:id' element={<NewProduct product={productList[currentlySelectedProductId]}/>}/>
			</Routes>
       </BrowserRouter>
	   </>
	  );
}
export default App;
