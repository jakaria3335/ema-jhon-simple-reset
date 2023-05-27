import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';
import { removeFromDb } from '../../assets/utilities/fakedb';
import { deleteShoppingCart } from '../../assets/utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faRightLong } from '@fortawesome/free-solid-svg-icons';
const Orders = () => {
	const savedCart = useLoaderData();

	const [cart, setCart] = useState(savedCart);
	const handleRemoveFromCart = (id) => {
		// console.log(id);
		const remaining = cart.filter((pd) => pd.id !== id);
		removeFromDb(id);
		setCart(remaining);
	};

	const handleClearCart = () => {
		deleteShoppingCart();
		setCart([]);
	};
	return (
		<div className="shop-container">
			<div className="review-container">
				{cart.length ? (
					cart.map((product) => (
						<ReviewItem
							key={product.id}
							product={product}
							handleRemoveFromCart={handleRemoveFromCart}
						></ReviewItem>
					))
				) : (
					<h1>Your cart is empty!!!</h1>
				)}
			</div>
			<div className="cart-container">
				<Cart cart={cart} handleClearCart={handleClearCart}>
					{cart.length > 0 ? (
						<Link className="link" to="/checkout">
							<button className="btn-proceed-order">
								<span>Proceed checkout</span>
								<FontAwesomeIcon
									className="right-icon"
									icon={faRightLong}
								></FontAwesomeIcon>
							</button>
						</Link>
					) : (
						<Link className="link" to="/">
							<button className="non-clickAble">
								Add Something
								<FontAwesomeIcon
									className="add-icon"
									icon={faAdd}
								></FontAwesomeIcon>
							</button>
						</Link>
					)}
				</Cart>
			</div>
		</div>
	);
};

export default Orders;
