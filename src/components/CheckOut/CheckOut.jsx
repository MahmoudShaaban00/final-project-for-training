import React from 'react'
import img1 from '../../assets/image 32.png'
import img2 from '../../assets/image 30.png'
import img3 from '../../assets/image 31.png'
import img4 from '../../assets/image 33.png'





export default function CheckOut() {
  return (
    <div className='grid lg:grid-cols-2 ml-14 mt-16'>
        <div>
            <h1 className='text-4xl font-semibold'>Billing Details</h1>
            <div className='mt-10 text-gray-500'>
            <label htmlFor="name" className='block'>First Name</label>
            <input type="text" id='name' className='bg-slate-200 rounded sm:px-24 py-1 mt-1' />
            </div>
            <div className='mt-4 text-gray-500'>
            <label htmlFor="companyname"  className='block'>Company Name</label>
            <input type="text"  id='companyname' className='bg-slate-200 rounded sm:px-24 py-1 mt-1' />
            </div>
            <div className='mt-4 text-gray-500'>
            <label htmlFor="streetaddress"  className='block'>Street Address</label>
            <input type="text" id='streetaddress' className='bg-slate-200 rounded sm:px-24 py-1 mt-1' />
            </div>
            <div className='mt-4 text-gray-500'>
            <label htmlFor=""  className='block'>Apartment,Floor,etc.(option)</label>
            <input type="text" className='bg-slate-200 rounded sm:px-24 py-1 mt-1'  />
            </div>
            <div className='mt-4 text-gray-500'>
            <label htmlFor=""  className='block'>Town/City</label>
            <input type="text" className='bg-slate-200 rounded sm:px-24 py-1 mt-1'  />
            </div>
            <div className='mt-4 text-gray-500'>
            <label htmlFor=""  className='block'>Phone Number</label>
            <input type="text" className='bg-slate-200 rounded sm:px-24 py-1 mt-1'  />
            </div>
            <div className='mt-4 text-gray-500'>
            <label htmlFor=""  className='block'>Email Address</label>
            <input type="text"  className='bg-slate-200 rounded sm:px-24 py-1 mt-1' />
            </div>
            <div className='flex my-3 '>
              <input type="checkbox" className='mr-2' />
                <label className=' inline-block'>Save this information for faster Check-Out </label>
            </div>
        </div>

<div>
        <div className='flex justify-around'>
          <div>
            <div className='block'>
            <input type="radio" id='bank' className='mr-2'/> <label htmlFor="bank">Bank</label>
            </div>
            <div>
            <input type="radio" id='cash' className='mr-2'/> <label htmlFor="cash">Cash on delivery</label>
            </div>
          </div>

          <div className='flex gap-3'>
            <img src={img1} className='w-[40px] h-[20px]'/>
            <img src={img2} className='w-[40px] h-[20px]'/>
            <img src={img3} className='w-[40px] h-[20px]'/>
            <img src={img4} className='w-[40px] h-[20px]'/>
          </div>
        </div>

        <div className=' sm:flex justify-around mt-10'>
        <input type="text" placeholder='Coupon Code' className='border-2 px-8 py-2 rounded sm:mx-0 mr-10 sm:inline-block mx-auto block'/>
        <button className='bg-red-600  hover:bg-black  py-2 px-16 rounded text-white sm:mx-0 mx-auto block sm:inline-block sm:mt-0 mt-5 '>Apply Coupon</button>
      </div>
      <button className='bg-red-600  hover:bg-black  py-2 px-16 rounded text-white sm:mx-0 mx-auto block sm:inline-block mt-8 sm:ml-10 '>Place Order</button>

        </div>

    </div>
  )
}
