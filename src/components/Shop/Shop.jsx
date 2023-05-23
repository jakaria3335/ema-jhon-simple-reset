import { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../assets/utilities/fakedb';
const Shop = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch('products.json')
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);
	///////Product Component Work Start///////
	const [cart, setCart] = useState([]);

	const handleAddToCart = (product) => {
		const newCart = [...cart, product];
		///////Optional Functions for update quantity:
		let newCrt = [];
		const exists = cart.find((pd) => pd.id === product.id);
		if (!exists) {
			product.quantity = 1;
			newCart = [...cart, product];
		} else {
			exists.quantity = exists.quantity + 1;
			const remaining = cart.filter((pd) => pd.id !== product.id);
			newCart = [...remaining, exists];
		}

		setCart(newCart);
		///Set Product on Local storage
		addToDb(product.id);
	};
	///////Product Component Work End///////
	///////Start LoadProduct by local storage id
	useEffect(() => {
		const storedCart = getShoppingCart();
		// console.log(storedCart);
		const savedCart = [];
		//get stored id.
		for (const id in storedCart) {
			// console.log(id);
			//get the product by id
			const addedProduct = products.find((product) => product.id === id);
			// console.log(addedProduct);
			if (addedProduct) {
				///Get quantity
				const quantity = storedCart[id];
				addedProduct.quantity = quantity;
				/////added product to the saved product
				savedCart.push(addedProduct);
			}
		}
		///set the cart
		setCart(savedCart);
	}, [products]);

	///////End LoadProduct by local storage id

	return (
		<div className="shop-container">
			<div className="products-container">
				{products.map((product) => (
					<Product
						key={product.id}
						product={product}
						handleAddToCart={handleAddToCart}
					></Product>
				))}
			</div>
			<div className="cart-container">
				<Cart cart={cart}></Cart>
			</div>
		</div>
	);
};

export default Shop;
