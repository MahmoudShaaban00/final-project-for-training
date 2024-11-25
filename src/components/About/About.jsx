import React from 'react';
import aboutimg from '../../assets/aboutsection.png'
import { FaHouseChimney } from "react-icons/fa6";
import { PiCurrencyCircleDollar } from "react-icons/pi";
import { GrGift } from "react-icons/gr";
import { FaSackDollar } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";
import { PiHeadphonesLight } from "react-icons/pi";
import { FaClipboardCheck } from "react-icons/fa";
import person1 from '../../assets/person1.png'
import person2 from '../../assets/person2.png'
import person3 from '../../assets/person3.png'
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function About() {
  return (
    <div className='sm:pl-12 pl-2'>
      <div className='grid lg:grid-cols-2 grid-cols-1 mt-10'>
        <div className='xl:mt-32'>
        <h1 className='md:text-5xl text-3xl font-bold'>Our Story</h1>
        <p className='font-semibold mt-7'>Launced in 2015, Exclusive is South Asia’s premier online shopping <br />
         makterplace with an active presense in Bangladesh. Supported <br /> 
         by wide range of tailored marketing, data and service solutions, <br />
          Exclusive has 10,500 sallers and 300 brands and serves 3 <br />
           millioons customers across the region. <br />
           </p> 
           <p className='font-semibold mt-7'>
            Exclusive has more than 1 Million products to offer, growing at a <br />
            very fast. Exclusive offers a diverse assotment in categories <br />
             ranging  from consumer
           </p>
        </div>
          <img src={aboutimg} className='xl:w-[700px] lg:w-[500px] sm:w-[470px] w-[300px] sm:mx-0 mx-auto block lg:mt-0 mt-6'/>
        <div>
        </div>
        </div>


        <div className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-20'>
        <div className='border p-8 hover:bg-red-700 xl:w-full sm:w-[350px] w-[300px] mx-auto'>
            <p className=' ml-28 w-10 bg-black  text-white rounded-3xl py-2'><FaHouseChimney className='m-auto text-3xl'/></p>
            <p className='ml-24 mt-3 text-3xl font-bold '>10.5k</p>
            <p className='ml-14 mt-1 font-semibold'>Sallers active our site</p>
          </div>
          <div className='border p-8 hover:bg-red-700 xl:w-full md:w-[350px] sm:w-[350px] w-[300px] mx-auto'>
            <p className=' ml-28 w-10 bg-black  text-white rounded-3xl py-2'><PiCurrencyCircleDollar className='m-auto text-3xl'/></p>
            <p className='ml-24 mt-3 text-3xl font-bold '>10.5k</p>
            <p className='ml-14 mt-1 font-semibold'>Sallers active our site</p>
          </div>
          <div className='border p-8 hover:bg-red-700 xl:w-full md:w-[350px] sm:w-[350px] w-[300px] mx-auto'>
            <p className=' ml-28 w-10 bg-black  text-white rounded-3xl py-2'><GrGift className='m-auto text-3xl'/></p>
            <p className='ml-24 mt-3 text-3xl font-bold '>10.5k</p>
            <p className='ml-14 mt-1 font-semibold'>Sallers active our site</p>
          </div>
          <div className='border p-8 hover:bg-red-700 xl:w-full md:w-[350px] sm:w-[350px] w-[300px] mx-auto'>
            <p className=' ml-28 w-10 bg-black text-white rounded-3xl py-2'><FaSackDollar className='m-auto text-3xl'/></p>
            <p className='ml-24 mt-3 text-3xl font-bold '>10.5k</p>
            <p className='ml-14 mt-1 font-semibold'>Sallers active our site</p>
          </div>
        </div>

        <div className='md:grid md:grid-cols-3 mt-20 grid place-content-center'>
          <div >
            <img src={person1} className='bg-slate-100 p-5 h-[430px] lg:w-[300px] md:w-[220px] ' /> 
            <h1 className='text-2xl font-semibold'>Tom Curise</h1>
            <p className='font-semibold md:mx-0 mx-auto'>Founder & Chaiman</p>
            <div className='flex gap-3 mt-2'>
              <CiTwitter/>
              < FaInstagram/>
              <FaLinkedinIn/>
            </div>
          </div>
          <div className='md:mt-0 mt-12'>
            <img src={person2}  className='bg-slate-100 h-[430px] lg:w-[300px]  md:w-[220px]'/>
            <h1 className='text-2xl font-semibold'>Tom Curise</h1>
            <p className='font-semibold '>Founder & Chaiman</p>
            <div className='flex gap-3 mt-2'>
              <CiTwitter/>
              < FaInstagram/>
              <FaLinkedinIn/>
            </div>
          </div>
          <div className='md:mt-0 mt-12'>
            <img src={person3}  className='bg-slate-100 p-5 h-[430px] lg:w-[300px]  md:w-[220px] w-[280px]'/>
            <h1 className='text-2xl font-semibold '>Tom Curise</h1>
            <p className='font-semibold '>Founder & Chaiman</p>
            <div className='flex gap-3 mt-2'>
              <CiTwitter/>
              < FaInstagram/>
              <FaLinkedinIn/>
            </div>
          </div>
        </div>


        <div className='grid xl:grid-cols-3 md:grid-cols-3 grid-cols-1   mt-32'>
        <div className='border p-8 hover:bg-red-700 xl:w-[350px] md:w-[230px] sm:w-[350px]  w-[300px] mx-auto'>
            <p className='xl:ml-28 mx-auto w-10 bg-black  text-white rounded-3xl py-2'><FaTruckFast  className='m-auto text-3xl'/></p>
            <p className='xl:ml-24 lg:ml-10 md:ml-10 sm:ml-28 mt-3 text-3xl font-bold '>10.5k</p>
            <p className='xl:ml-14 mt-1 font-semibold md:ml-0 sm:ml-16'>Sallers active our site</p>
          </div>
          <div className='border p-8 hover:bg-red-700  xl:w-[350px] md:w-[230px] sm:w-[350px] w-[300px] mx-auto md:mt-0 mt-8'>
            <p className='xl:ml-28 mx-auto w-10 bg-black  text-white rounded-3xl py-2'><PiHeadphonesLight className='m-auto text-3xl'/></p>
            <p className='xl:ml-24 lg:ml-10 md:ml-10 sm:ml-28 mt-3 text-3xl font-bold '>10.5k</p>
            <p className='xl:ml-14 mt-1 font-semibold md:ml-0 sm:ml-16 '>Sallers active our site</p>
          </div>
          <div className='border p-8 hover:bg-red-700  xl:w-[350px] md:w-[230px] sm:w-[350px] w-[300px] mx-auto  md:mt-0 mt-8'>
            <div>
            <p className='xl:ml-28 mx-auto w-10 bg-black  text-white rounded-3xl py-2'><FaClipboardCheck className='m-auto text-3xl'/></p>
            <p className='xl:ml-24 mt-3 lg:ml-10 md:ml-10 sm:ml-28 text-3xl font-bold '>10.5k</p>
            <p className='xl:ml-14 mt-1 font-semibold md:ml-0 sm:ml-16'>Sallers active our site</p>
          </div>
          </div>
        </div>


        </div>
  )
}
