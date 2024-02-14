import {productActions} from "../../store/productSlice.js";

export const getProducts=(limit,skip)=>{
	return async (dispatch)=>{
		const fetchProducts=async ()=>{
			const response=await fetch(`https://dummyjson.com/products?limit=${limit}&&skip=${skip}`);
			return await response.json();
		}
		try{
			const data=await fetchProducts()
			dispatch(productActions.addProducts(data));
		}catch(e){
			console.log('Some error faced...');
		}
	}
}