import {Provider} from "react-redux";
import {store} from "../store/index.js";

const App=()=>{
  return (
    <Provider store={store}>
        <h1>Hello React+Vite</h1>
    </Provider>
  )
}

export default App
