import {useEffect} from "react";
import {getProducts} from "./services/product-api.js";
import {useDispatch} from "react-redux";
import Main from "./Layout/Main/Main.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Products from "./components/Products/Products.jsx";

const App=()=>{
    const Dispatch=useDispatch()
    useEffect(() => {
        Dispatch(getProducts(21,0))
    }, [Dispatch]);

  return (
      <Main>
          <Navbar/>
          <Products/>
      </Main>
  )
}

export default App
