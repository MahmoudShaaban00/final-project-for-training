import  {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import SignUp from './components/Sign Up/SignUp'
import Layout from './components/Layout/Layout'
import NotFound from './components/NotFound/NotFound'
import Login from './components/Login/Login'
import CheckOut from './components/CheckOut/CheckOut'
import { useEffect, useState } from 'react'
import Cart from './components/Cart/Cart'
import HomeProduct from './components/products'
import ProductDetails from './components/ProductDetails/ProductDetails'
import Shopping from './components/Shopping/Shopping'

function App() {

  const [cart,setcart]=useState([])

  const searchbtn =(product) =>{
    const change = HomeProduct.filter((x) => {
     return x.cart ===product
    }) 
  }
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setcart(storedCart);
  }, []);

  // Update local storage whenever the cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addtocart = (item) => {
    setcart((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        // Increase the quantity if the item already exists
        const updatedCart = prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
        alert(`Increased quantity in the cart.`);
        return updatedCart;
      } else {
        // Add new item to the cart
        alert(`Product has been added to the cart.`);
        return [...prevCart, { ...item, quantity: item.quantity }];
      }
    });
  };



  let x = createBrowserRouter([
    {path:'', element:<Layout cart={cart} /> , children:[
      {index:true, element:<Home addtocart={addtocart}/>},
      {path:'contact', element:<Contact/>},
      {path:'about', element:<About/>},
      {path:'signup', element:<SignUp/>},
      {path:'login', element:<Login/>},
      {path:'productdetails/:id', element:<ProductDetails/>},
      {path:'cart', element:<Cart cart={cart} setcart={setcart} />},
      {path:'checkout', element:<CheckOut  />},
      {path:'shopping', element:<Shopping  addtocart={addtocart}/>},
      {path:'*', element:<NotFound/>},
    ]},
  ])

  return <RouterProvider router={x}></RouterProvider>
  }

export default App
