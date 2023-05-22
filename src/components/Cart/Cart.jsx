import React from 'react';
import './Cart.css';
const Cart = (props) => {
	///////////total and shipping calculation
	let total = 0;
	let totalShipping = 0;
	for (const product of props.cart) {
		total = total + product.price;
		totalShipping = totalShipping + product.shipping;
	}
	////////////Tax calculation
	const percentageOfTax = 7;
	const tax = (total * percentageOfTax) / 100;
	////////////Grand Total Calculation
	const grandTotal = total + totalShipping + tax;
	return (
		<div className="cart">
			<h4>Order Summary</h4>
			<p>Selected Items: {props.cart.length}</p>
			<p>Total Price: ${total.toFixed(2)}</p>
			<p>Total Shipping: ${totalShipping.toFixed(2)}</p>
			<p>Tax: ${tax.toFixed(2)}</p>
			<p>Grand Total: ${grandTotal.toFixed(2)}</p>
		</div>
	);
};

export default Cart;
