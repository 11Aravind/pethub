import "./css/card.css"
import "./css/navbar.css"
import "./css/style.css"
import Navbar from "./component/Navbar";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Notfound from "./pages/Notfound";
import Home from "./pages/Home";
import Products from "./pages/Products"
import Signup from "./pages/Signup"
import Productdetails from "./pages/Productdetails"
import Cart from './pages/Cart'
function App() {
  return (
    <div className="App">
        <Navbar /> 
        <Routes>

        <Route path="/" element={<Home />}/>
     <Route path="/pets" element={<Products />}/>
     <Route path="/login" element={<Login />}/>
     <Route path="/register" element={<Signup />}/>
     <Route path="/Productdetails" element={<Productdetails />}/>
     <Route path="cart/" element={<Cart />}/>

    
      <Route path='*' element={<Notfound/>}> </Route>

      </Routes>


      </div>
    // </div>
  );
}

export default App;
