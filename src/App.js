import React, { useState, useEffect } from 'react';
import './App.css';
// Components
import CardProduct from './components/CardProduct';

import { db } from './firebase';

const App = () => {
	const [products, setProducts] = useState([]);

	console.log(products);

	 const getProducts = () => {
	 	const docs = [];
	 	db.collection('products').onSnapshot((querySnapshot) => {
	 		querySnapshot.forEach((doc) => {
	 			// console.log(doc.data());
	 			// console.log(doc.id);
	 			docs.push({ ...doc.data(), id: doc.id });
	 			// console.log(docs);
	 		});
	 		setProducts(docs);
	 	});
	 };

	// const getProductWhere = () => {
	// 	db.collection('products')
	// 		.where('price', '==', 800)
	// 		.get()
	// 		.then(function (querySnapshot) {
	// 			querySnapshot.forEach(function (doc) {
	// 				// doc.data() is never undefined for query doc snapshots
	// 				console.log(doc.id, ' => ', doc.data());
	// 			});
	// 		});
	// };

	// const getProduct = () => {
	// 	const docs = [];
	// 	db.collection('products').onSnapshot((querySnapshot) => {
	// 		querySnapshot.forEach((doc) => {
	// 			// console.log(doc.data());
	// 			// console.log(doc.id);
	// 			docs.push({ ...doc.data(), id: doc.id });
	// 			// console.log(docs);
	// 			let filteredItem = docs.filter(
	// 				(itemFiltered) => itemFiltered.id === 'kh1CKlpsc7bOl3i2z0YD'
	// 			);
	// 			// console.log(filteredItems);
	// 			setProducts(filteredItem);
	// 		});
	// 	});
	// };

	useEffect(() => {
		 getProducts();
		// getProductWhere();
		//getProduct();
	}, []);

	return (
		<div className='App'>
			<h1>Firebase App</h1>
			{products.map((item) => {
				return (
					<div key={item.id} className='product-container'>
						<CardProduct data={item} />
					</div>
				);
			})}
		</div>
	);
};

export default App;
