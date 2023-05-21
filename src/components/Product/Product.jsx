const Product = (props) => {
	console.log(props.product);
	const {img,name,price}=props.product
	return (
		<div>
			<img src={img} alt="" />
			<h4>{name}</h4>
			<h4>{price}</h4>
		</div>
	);
};

export default Product;
