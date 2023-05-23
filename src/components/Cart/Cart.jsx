import React from 'react';
import './Cart.css';
const Cart = (props) => {
	///////////total and shipping calculation
	let totalPrice = 0;
	let totalShipping = 0;
	let quantity = 0;
	for (const product of props.cart) {
		// product.quantity= product.quantity || 1;
		totalPrice = totalPrice + product.price * product.quantity;
		totalShipping = totalShipping + product.shipping;
		quantity = quantity + product.quantity;
	}
	////////////Tax calculation
	const percentageOfTax = 7;
	const tax = (totalPrice * percentageOfTax) / 100;
	////////////Grand Total Calculation
	const grandTotal = totalPrice + totalShipping + tax;
	return (
		<div className="cart">
			<h4>Order Summary</h4>
			<p>Selected Items: {quantity}</p>
			<p>Total Price: ${totalPrice.toFixed(2)}</p>
			<p>Total Shipping: ${totalShipping.toFixed(2)}</p>
			<p>Tax: ${tax.toFixed(2)}</p>
			<p>Grand Total: ${grandTotal.toFixed(2)}</p>
		</div>
	);
};

export default Cart;
