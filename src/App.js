import  React, {useState} from 'react';
import {Route,Routes} from 'react-router';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';

/* admin route */
import Dhashboard from './Admin/Dhashboard';
import Customerservices from './Admin/Customerservices'
import Users from './Admin/Users';
import Register from './Admin/Register';
import Login from './Admin/Login';
import Categories from './Admin/Categories';
import Services from './Admin/Sevices';
import Protected from './Admin/Protected';
import Cart from './Pages/Cart';
import Orders from './Admin/Orders';
import { CartProvider } from 'react-use-cart';
import Checkout from './Pages/Checkout';
function App() {
  const [ isSignedIn, setIsSignedIn ] = useState(()=> {
      /* if you want, user will be logged in until they logout*/
      //return localStorage.getItem("access_token") || false;
      /* if you want, user will be logged when they close the browser*/
      return sessionStorage.getItem("access_token") || false;
    });
  return (
    <>
    <CartProvider>
   <Routes>
    <Route path="/"element={<Home/>}/>
    <Route path="/about"element={<About/>}/>
    <Route path="/service"element={<Service/>}/>
    <Route path="/contact"element={<Contact/>}/>
    <Route path="/blog"element={<Blog/>}/>
    <Route path="/cart"element={<Cart/>}/>
    <Route path="/checkout"element={<Checkout/>}/>
    {/* Admin route */}
    <Route path="/Admin/Dhashboard" element={ <Protected  isSignedIn= {isSignedIn} ><Dhashboard /></Protected>} />

    

    <Route path="/Admin/Users" element={<Protected  isSignedIn= {isSignedIn} >
              <Users /> 
           </Protected>} />
      <Route path="/Admin/categories" element={<Protected  isSignedIn= {isSignedIn} >
         <Categories /> 
      </Protected>} />
      <Route path="/Admin/services" element={<Protected  isSignedIn= {isSignedIn} >
         <Services /> 
      </Protected>} />
      <Route path="/Admin/orders" element={<Protected  isSignedIn= {isSignedIn} >
         <Orders /> 
      </Protected>} />
       <Route path="/Admin/customerservices" element={<Protected  isSignedIn= {isSignedIn} >
         <Customerservices /> 
      </Protected>} />
    <Route path="/Register" element={<Register />} />
    <Route path="/Login" element={<Login />} />
   


   </Routes>
</CartProvider>
   
   


   
    
    </>
  );
}

export default App;
