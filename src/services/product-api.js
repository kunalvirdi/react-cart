import {productActions} from "../store/productSlice.js";
import product from "../components/Products/Product.jsx";

export const getProducts=(limit,skip)=>{
	return async (dispatch)=>{
		dispatch(productActions.loadingHandler(true))
		const fetchProducts=async ()=>{
			const response=await fetch(`https://dummyjson.com/products?limit=${limit}&&skip=${skip}`);
			return await response.json();
		}
		try{
			const data=await fetchProducts()
			dispatch(productActions.loadingHandler(false))
			dispatch(productActions.addProducts(data));
		}catch(e){
			console.log('Some error faced...');
		}
	}
}