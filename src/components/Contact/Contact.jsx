import React from 'react'
import { BsTelephone } from "react-icons/bs";
import { CgMail } from "react-icons/cg";

export default function Contact() {
  return (
    <div className='mx-14 mt-20 md:flex'>
      <div className='shadow-lg p-10 md:mr-5 xl:mr-0'>
        <div>
          <div className='flex items-center'>
            <span className='bg-red-700 text-white rounded-3xl p-2'>< BsTelephone className='text-2xl mx-auto' /></span>
            <p className='font-bold ml-5'>Call To Us</p>
          </div>
          <div>
            <p className='mt-4 font-semibold'>We are available 24/7,7 days a week</p>
            <p className='mt-3 font-semibold'>phone:+8801611112222</p>
          </div>
        </div>
        <span className='sm:w-full md:w-[270px] h-[1px] bg-gray-400 mt-6 block'></span>

        <div className='mt-6'>
          <div className='flex items-center'>
            <span className='bg-red-700 text-white rounded-3xl p-2'>< CgMail className='text-2xl mx-auto' /></span>
            <p className='font-bold ml-5'>Write To US</p>
          </div>
          <p className='my-5 font-semibold '>
            Fill out our form and we will contact <br />
            you within 24 hours.
           </p>
           <p className='font-semibold my-4'> Emails: customer@exclusive.com</p>
           <p className='font-semibold'>Emails: support@exclusive.com </p>
        </div>
      </div>

      <div className='xl:w-[800px] lg:w-[500px] xl:ml-28 lg:ml-16 shadow-lg p-10 relative'>
        <form>
          <div className='xl:flex  xl:gap-6'>
            <input type="text" placeholder='Your Name' className='bg-slate-100 p-2 px-4 rounded '/>
            <input type="email" placeholder='Your Email' className='bg-slate-100 p-2 px-4 rounded mt-2 md:mt-0'/>
            <input type="tel" placeholder='Your Phone' className='bg-slate-100 p-2 px-4 rounded mt-2 md:mt-0'/>
          </div>
          <textarea className='bg-slate-100 w-full sm:h-[250px] h-32 mb-4  mt-8'></textarea>
          <button className='bg-red-700 xl:py-3 sm:py-2 xl:px-10 sm:px-6 p-2 text-white rounded absolute xl:bottom-3 bottom-2 right-24  sm:bottom-2 md:right-10 hover:bg-black'>Send Message</button>
        </form>
      </div>
    </div>
  )
}
