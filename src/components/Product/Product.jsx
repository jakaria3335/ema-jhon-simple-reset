import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBasketShopping,
	faCoffee,
	faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
	// console.log(props.product);
	const { id, img, name, price, ratings, seller } = props.product;
	const { handleAddToCart } = props;
	return (
		<div className="product">
			<img src={img} alt="" />
			<div className="product-info">
				<h6 className="product-name">{name}</h6>
				<p className="product-price">Price: ${price}</p>
				<div className="seller-info">
					<p>Manufacturer: {seller}</p>
					<p>Rating: {ratings} Star</p>
				</div>
			</div>
			<button
				className="btn-cart"
				onClick={() => handleAddToCart(props.product)}
			>
				Add to cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
			</button>
		</div>
	);
};

export default Product;
