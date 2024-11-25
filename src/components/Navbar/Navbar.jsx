import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { CiHeart } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';

export default function Navbar({ cart }) {  // Provide a default empty array for cart
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  function changeToCart() {
    navigate('/cart');
  }

  function toggleNavbar() {
    setIsOpen(!isOpen);
  }

  

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <h1 className="text-xl text-black font-bold">Exclusive</h1>
        <div className={`w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`} id="navbar-collapse">
          <ul className="flex flex-col md:flex-row md:space-x-8 md:justify-center p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:p-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink to="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</NavLink>
            </li>
            <li>
              <NavLink to="/signup" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sign Up</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex md:order-2 items-center">
          <CiHeart className="md:text-3xl mx-3 text-2xl mt-2" />
          
          <div className="relative">
            <IoCartOutline onClick={changeToCart} className="md:text-3xl mx-1 cursor-pointer text-2xl mt-2" />
            {totalCartItems > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {totalCartItems}
              </span>
            )}
          </div>
        </div>
        <button
          onClick={toggleNavbar}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-collapse"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
