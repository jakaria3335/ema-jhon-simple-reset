import './Product.css';
const Product = (props) => {
	console.log(props.product);
	const { img, name, price, ratings, seller } = props.product;
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
			<button className="btn-cart">Add to cart</button>
		</div>
	);
};

export default Product;
