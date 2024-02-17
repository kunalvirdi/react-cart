import styles from './products.module.css'
import {memo} from "react";

const Product=({product})=>{
	const {thumbnail,title,price,description}=product;
	return(
		<div className={styles.product}>
			<div className={styles.thumbnail}>
				<img src={thumbnail} alt={title}/>
				<h3 className={styles.price}>${price}</h3>
			</div>
			<div className={styles.title}>{title}</div>
			<button onClick={()=>console.log(product)} className={styles.button}>Add to cart</button>
		</div>
	)
}
export default memo(Product)