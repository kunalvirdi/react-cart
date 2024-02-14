import {useEffect} from "react";
import {getProducts} from "./services/product-api.js";
import {useSelector,useDispatch} from "react-redux";

const App=()=>{
    const products=useSelector(state=>state.product)

    const Dispatch=useDispatch()
    useEffect(() => {
        Dispatch(getProducts(20,0))
    }, [Dispatch]);
  return (

  )
}

export default App
