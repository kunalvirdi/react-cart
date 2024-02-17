import {configureStore} from "@reduxjs/toolkit";
import productSlice from "./productSlice.js";

export const store=configureStore({
	reducer:{product:productSlice.reducer}
})