import {createSlice} from "@reduxjs/toolkit";

const productSlice=createSlice({
	name:'product',
	initialState:[],
	reducers:{
		addProducts(state,action){
			state.push(action.payload)
		}
	}
})

const productActions=productSlice.actions
export default productSlice;
