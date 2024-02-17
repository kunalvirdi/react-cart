import styles from './products.module.css'
import {useDispatch, useSelector} from "react-redux";
import Product from "./Product.jsx";
import {getProducts} from "../../services/product-api.js";
import {useEffect} from "react";
const Products=()=>{
	const response=useSelector(state=>state.product);
	const {products,limit,skip,total,isLoading}=response
	const Dispatch=useDispatch();

	const onEndReachHandler=()=>{
		const scrollHeight=document.documentElement.scrollHeight
		const windowHeight=window.innerHeight;
		const scrollTop=document.documentElement.scrollTop
		if(Math.floor(scrollTop)+windowHeight+1>=scrollHeight){
				if(!isLoading && skip!==total) {
					Dispatch(getProducts(limit, limit + skip))
				}
		}
	}
	useEffect(() => {
		window.addEventListener('scroll',onEndReachHandler)
		return ()=>window.removeEventListener('scroll',onEndReachHandler)
	}, [response]);
	return(
		<div className={styles.container}>
			<div className={styles.products}>
				{products !== undefined && products.map(product => {
					return <Product key={product.id} product={product}/>
				})}
			</div>
			{isLoading && <p className={styles.message}>Fetching Products, Please wait!</p>}
			{skip===total && <p className={styles.message}>End of products</p>}
		</div>
	)
}
export default Products