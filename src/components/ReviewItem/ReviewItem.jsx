import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({ product, handleRemoveFromCart }) => {
	<h6>Shipping Charge: {}</h6>;
	const { img, name, quantity, price, id, shipping } = product;

	return (
		<div className="review-item">
			<img src={img} alt="" />
			<div className="review-details">
				<p className="review-product-title">{name}</p>
				<p>
					Price: <span className="orange-text"> ${price}</span>
				</p>
				<p>
					Shipping Charge: <span className="orange-text"> ${shipping}</span>
				</p>
				<p>Quantity: {quantity}</p>
			</div>
			<button className="btn-delete" onClick={() => handleRemoveFromCart(id)}>
				<FontAwesomeIcon
					className="delete-icon"
					icon={faTrashAlt}
				></FontAwesomeIcon>
			</button>
		</div>
	);
};

export default ReviewItem;
