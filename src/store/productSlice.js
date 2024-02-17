import {createSlice} from "@reduxjs/toolkit";

const productSlice=createSlice({
	name:'product',
	initialState:{
		limit:0,
		skip:0,
		products:[],
		total:-50,
		isLoading:false
	},
	reducers:{
		addProducts(state,action){
			state.limit=action.payload.limit;
			state.skip=action.payload.skip
			state.products.push(...action.payload.products)
			state.total=action.payload.total
		},
		loadingHandler(state,action){
			state.isLoading=action.payload
		}
	}
})

export const productActions=productSlice.actions
export default productSlice;
