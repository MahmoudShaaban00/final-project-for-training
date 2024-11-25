import React from 'react'
import { GiPlayButton } from "react-icons/gi";
import appstore from '../../assets/appstore.png';
import googleplay from '../../assets/gooleplay.png';
import code from '../../assets/code.png';




export default function Footer() {
    return (
        <div className='bg-black text-white grid lg:grid-cols-5 mt-20 sm:grid-cols-3 grid-cols-2 px-10 pt-10 py-3  w-screen'>
            <div>
                <h1 className='lg:text-xl text-lg font-semibold'>Exclusive</h1>
                <p className='text-sm my-3'>Subscribe</p>
                <p className='text-sm mb-3'>Get 10% off your first order</p>
                <div className='bg-black flex justify-between items-center border-2 border-white xl:w-[190px] md:w-[100px] w-[60px] p-1'>
                    <input type="email" placeholder='Enter your email' 
                    className='bg-black xl:w-[120px] md:w-[70px] w-[40px]' />
                    <GiPlayButton className='text-2xl'/>
                </div>
            </div>

            <div>
                <h1 className='text-xl'>Support</h1>
                <p className='text-sm my-3'>111 Bijoy sarani, Dhaka,<br />  DH 1515, Bangladesh.</p>
                <p className='text-sm my-3'>exclusive@email.com</p>
                <p className='text-sm'>+88015-88888-9999</p>
            </div>

            <div className='sm:mt-0 mt-8'>
                <h1 className='text-xl'>Account</h1>
                <p className='my-2 text-sm'>My Account</p>
                <p className='my-2 text-sm'>Login / Register</p>
                <p className='my-2 text-sm'>Cart</p>
                <p className='my-2 text-sm'>Wishlist</p>
                <p className='text-sm'>Shop</p>
            </div>

            <div className='lg:mt-0 mt-8'>
                <h1 className='text-xl '>Quick Link</h1>
                <p className='my-2 text-sm'>Privacy Policy</p>
                <p className='my-2 text-sm'>Terms Of Use</p>
                <p className='my-2 text-sm'>FAQ</p>
                <p>Contact</p>
            </div>

            <div className='lg:mt-0 mt-8 '>
                <h1 className='text-xl'>Download app</h1>
                <p className='my-2 text-sm'>Save $3 With App New User Only</p>
                <div className='flex gap-8 text-sm'>
                <div>
                    <img src={code}  />
                </div>
                <div>
                    <img src={googleplay} className='mb-2'/>
                    <img src={appstore}  />
                </div>
                </div>
            </div>
        </div>
    )
}
