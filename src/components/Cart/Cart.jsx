import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom'

export default function Cart({ cart, setcart }) {
  const navigate = useNavigate();

  function changeToCheckout() {
    navigate('/checkout');
  }
  

  const increaseQuantity = (itemId) => {
    setcart((prevCart) =>
      prevCart.map(cartItem => {
        // Check if the item matches and update quantity
        if (cartItem.id === itemId) {
          // Set initial quantity if undefined
          const newQuantity = (cartItem.quantity || 1) + 1;
          console.log(`Increasing quantity for item ID ${itemId} to ${newQuantity}`);
          return { ...cartItem, quantity: newQuantity };
        }
        return cartItem;
      })
    );
  };

  const decreaseQuantity = (itemId) => {
    setcart((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem.id === itemId);
      if (existingItem && existingItem.quantity > 1) {
        console.log(`Decreasing quantity for item ID ${itemId}`);
        return prevCart.map(cartItem =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      } else {
        console.log(`Removing item ID ${itemId} from cart`);
        return prevCart.filter(cartItem => cartItem.id !== itemId);
      }
    });
  };

  const removeFromCart = (itemId) => {
    setcart((prevCart) => prevCart.filter(cartItem => cartItem.id !== itemId));
    console.log(`Item with ID ${itemId} has been removed from the cart.`);
  };

  const totalprice = cart.reduce((price, item) => price + (item.quantity || 1) * item.price, 0);

  return (
    <div>
      {cart.length === 0 ? (
        <div className="text-center py-10">
          <h2 className="text-lg font-semibold mb-5">Your cart is empty!</h2>
          <Link to="/shopping" className="text-white bg-fuchsia-700 px-8 py-4 rounded-sm">Continue Shopping</Link>
        </div>
      ) : (
        <div>
          <table className="w-full">
            <thead>
              <tr className='grid grid-cols-4 pt-5'>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((curElm) => (
                <tr className='grid grid-cols-4 p-6 mt-10 place-items-center shadow-md' key={curElm.id}>
                  <td className='relative'>
                    <img src={curElm.img} alt={curElm.title} className='w-[200px] h-[200px]' />
                    <button className='absolute top-0 text-red-700 text-2xl' onClick={() => removeFromCart(curElm.id)}>
                      <AiOutlineClose />
                    </button>
                  </td>
                  <td className='info'>
                    <h3>Price: ${curElm.price}</h3>
                  </td>
                  <td className='flex'>
                    <button onClick={() => increaseQuantity(curElm.id)}>+</button>
                    <input type="text" value={curElm.quantity || 1} readOnly className=' text-center w-[35px]' />
                    <button onClick={() => decreaseQuantity(curElm.id)}>-</button>
                  </td>
                  <td>
                    <h4 className='subtotal'>Total Price: ${curElm.price * (curElm.quantity || 1)}</h4>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className='flex justify-between px-24 py-11'>
            <Link to="/" className='bg-white py-2 px-6 rounded border-gray-300 border-2 hover:bg-black'>Return to Shopping</Link>
            <button className='bg-white py-2 px-6 rounded border-gray-300 border-2 hover:bg-black'>Update</button>
          </div>

          <div className='sm:flex justify-around sm:gap-72'>
            <div>
              <input type="text" placeholder='Coupon Code' className='border-2 px-5 py-2 rounded sm:mx-0 mr-10 sm:inline-block mx-auto block' />
              <button className='bg-red-600 hover:bg-black py-2 px-9 rounded text-white sm:mx-0 mx-auto block sm:inline-block sm:mt-0 mt-5'>Apply Coupon</button>
            </div>
            <div className='border-2 border-gray-700 p-8 sm:mt-0 mt-10'>
              <h1 className='mb-5 font-semibold text-xl'>Cart Total</h1>
              <p className='flex justify-between'><span>Subtotal:</span><span>${totalprice}</span></p>
              <span className='bg-gray-700 w-full h-[1px] my-2 block'></span>
              <p className='flex justify-between'><span>Shipping:</span><span>Free</span></p>
              <span className='bg-gray-700 w-full h-[1px] my-2 block'></span>
              <p className='flex justify-between'><span>Total:</span><span>${totalprice}</span></p>
              <button onClick={changeToCheckout} className='bg-red-600 hover:bg-black py-2 px-9 rounded text-white mt-3'>Proceed To Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
