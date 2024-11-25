import React, { useEffect, useState } from 'react'
import Sidebar, { SideBarItems } from '../Sidebar/Sidebar'
import imagehero from '../../assets/hero.png'
import bg from '../../assets/bg.png'
import { FaApple } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import HomeProduct from '../products';
import image1 from '../../assets/a.png'
import image2 from '../../assets/b.png'
import image3 from '../../assets/c.png'
import image4 from '../../assets/d.png'
import { FaTruckFast } from "react-icons/fa6";
import { PiHeadphonesLight } from "react-icons/pi";
import { FaClipboardCheck } from "react-icons/fa";
import CardBest from '../CardBest/CardBest';
import CardFlash from '../Flashproduct/CardFlash';
import { Link, useNavigate } from 'react-router-dom';


export default function Home({ addtocart }) {

  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [hoveredProductId, setHoveredProductId] = useState(null); // Track hovered product's ID


  const updateTime = () => {
    setCurrentTime(new Date().toLocaleTimeString());
  };


  useEffect(() => {
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, []);

  
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/productdetails/${product.id}`, { state: product });
  };


  //Routing to shopping products
  const RoutingShoping =useNavigate()
  function changeRoutingForShopping(){
   RoutingShoping('/shopping')
  }

  return (

    <div className='px-5'>
      <div className='md:flex gap-14 '>
        <main className='w-1/4 sm:block hidden'>
          <Sidebar>
            <SideBarItems text="Woman's Fashion"  />
            <SideBarItems text="men's Fashion" />
            <SideBarItems text="Electronic" />
            <SideBarItems text="Home & Lifestyle" />
            <SideBarItems text="Sports & Outdoor" />
            <SideBarItems text="Boy's & Toys" />
            <SideBarItems text="Grocerices & Pets" />
            <SideBarItems text="Health & Beauty" />
            <SideBarItems text="Medicine" />

          </Sidebar>
        </main>

        <div className=' flex sm:mt-0 mt-10'>
          <div className='bg-black w-[400px] text-white p-14'>
            <div className='flex items-center'>
              <FaApple className='text-white text-5xl mr-8' />
              <p>iPhone 14 Series</p>
            </div>
            <p className='lg:text-5xl md:text-2xl font-semibold mt-2'>Up To 10%</p>
            <p className='lg:text-5xl  md:text-2xl font-semibold mt-2'>Off Vouecher</p>
            <button className='mt-12 flex items-center'><span onClick={()=>changeRoutingForShopping()} 
             className='mr-4 border-b'>Shop Now</span> <FaArrowRight /></button>
          </div>
          <img src={imagehero} className='xl:w-[500px] lg:w-[370px] md:w-[250px] w-[150px] ' />
        </div>
      </div>

      <div className='mt-24'>
        <div className='flex items-center'>
          <span className='w-[12px] h-[22px] bg-red-700 inline-block'></span>
          <span className='ml-5 text-red-700'>Today's</span>
        </div>

        <div className='flex items-center sm:ml-60 ml-52 sm:gap-6 gap-2 font-bold'>
          <span>Hr</span>
          <span>Min</span>
          <span>Sec</span>
        </div>
        <div className='flex items-center mb-4'>
          <h1 className='sm:text-3xl text-2xl font-bold'>Flash Sales</h1>
          <h1 className='ml-20 sm:text-4xl text-2xl font-bold'>{currentTime}</h1>
        </div>

        <CardFlash addtocart={addtocart} />
      </div>

      <div className='mt-16'>
        <div className='flex items-center'>
          <span className='w-[12px] h-[22px] bg-red-700 inline-block'></span>
          <span className='ml-5 text-red-700'>Categories</span>
        </div>
        <h1 className='text-3xl font-bold mt-5'>Browser By Category</h1>
      </div>

      <div className='mt-16 mb-6 '>
        <div className='flex items-center'>
          <span className='w-[12px] h-[22px] bg-red-700 inline-block'></span>
          <span className='ml-5 text-red-700'>This Month</span>
        </div>
        <div className='flex justify-between'>
          <h1 className='text-3xl font-bold mt-5'>Best Selling Products</h1>
          <button className='bg-red-700 text-white px-5 rounded h-[40px] mr-8  hover:bg-black'>Veiw All</button>
        </div>
      </div>
      <CardBest addtocart={addtocart} />

      <div className='bg-black text-white grid md:grid-cols-2 grid-cols-1 px-12 py-14 mt-20'>
        <div className='sm:mx-auto mx-auto'>
          <p className='text-green-500'>Categories</p>
          <h1 className='lg:text-6xl sm:text-3xl font-semibold mt-5'>Enhance Your</h1>
          <h1 className='lg:text-6xl sm:text-3xl font-semibold mt-2'>Music Experience</h1>
          <h1 className='mt-5 text-2xl sm:text-3xl font-bold'>{currentTime}</h1>
          <button className='bg-green-500 px-5 rounded mt-16 py-2'>Buy Now</button>
        </div>

        <div>
          <img src={bg} className='md:mt-0 mt-10 mx-auto w-[100px] h-[150px] sm:w-[150px] sm:h-[250px] sm:mx-auto md:w-[200px] lg:[360px] xl:w-[420px] lg:h-[350px] md:h-[300px] md:ml-40' />
        </div>

      </div>

      <div className='mt-28'>
        <h2 className='xl:text-4xl md:text-3xl sm:text-2xl font-bold mb-6'>top products</h2>
        <div className='grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-8'>
          {
            HomeProduct.map((curElm) => {
              return (


                <div key={curElm.id}>

                  <div className='rounded p-0 bg-slate-200'
                      onMouseEnter={() => setHoveredProductId(curElm.id)}  
                      onMouseLeave={() => setHoveredProductId(null)} >


                      <img onClick={()=> {handleProductClick(curElm)}} src={curElm.img} className='mx-auto p-10  h-[200px]' alt={curElm.title} />

                      {hoveredProductId === curElm.id && ( // Show button only if hovered ID matches current product ID
                  <button
                    onClick={() => addtocart(curElm)}
                    className='w-full rounded bg-black py-2 text-white hover:bg-red-700'
                  >
                    Add to Cart
                  </button>
                )}
                  </div>


                  <div className='detail'>
                    <h3 className='font-bold text-lg mt-1'>{curElm.title}</h3>
                    <h4 className='mr-5 text-red-500'>${curElm.price}</h4>
                  </div>

                </div>
              )
            }
            )
          }
        </div>
      </div>

      <div className='my-32 flex justify-around'>
        <div>
          <img src={image1} className='sm:w-[300px] md:w-[480px] lg:w-[530px] w-[170px]' />
        </div>
        <div>
          <div>
            <img src={image2} className='lg:w-[450px] sm:w-[300px] md:w-[400px] w-[150px]' />
          </div>
          <div className='flex gap-10 mt-5'>
            <img src={image3} className='lg:w-[200px] sm:w-[120px] md:w-[160px] w-[60px]' />
            <img src={image4} className='lg:w-[200px] sm:w-[120px] md:w-[160px] w-[60px]' />
          </div>
        </div>
      </div>

      <div className='grid xl:grid-cols-3 md:grid-cols-3 grid-cols-1   my-24'>
        <div className='border p-8 hover:bg-red-700 xl:w-[350px] md:w-[230px] sm:w-[350px]  w-[300px] mx-auto'>
          <p className='xl:ml-28 mx-auto w-10 bg-black  text-white rounded-3xl py-2'><FaTruckFast className='m-auto text-3xl' /></p>
          <p className='xl:ml-24 lg:ml-10 md:ml-10 sm:ml-28 mt-3 text-3xl font-bold '>10.5k</p>
          <p className='xl:ml-14 mt-1 font-semibold md:ml-0 sm:ml-16'>Sallers active our site</p>
        </div>
        <div className='border p-8 hover:bg-red-700  xl:w-[350px] md:w-[230px] sm:w-[350px] w-[300px] mx-auto md:mt-0 mt-8'>
          <p className='xl:ml-28 mx-auto w-10 bg-black  text-white rounded-3xl py-2'><PiHeadphonesLight className='m-auto text-3xl' /></p>
          <p className='xl:ml-24 lg:ml-10 md:ml-10 sm:ml-28 mt-3 text-3xl font-bold '>10.5k</p>
          <p className='xl:ml-14 mt-1 font-semibold md:ml-0 sm:ml-16 '>Sallers active our site</p>
        </div>
        <div className='border p-8 hover:bg-red-700  xl:w-[350px] md:w-[230px] sm:w-[350px] w-[300px] mx-auto  md:mt-0 mt-8'>
          <div>
            <p className='xl:ml-28 mx-auto w-10 bg-black  text-white rounded-3xl py-2'><FaClipboardCheck className='m-auto text-3xl' /></p>
            <p className='xl:ml-24 mt-3 lg:ml-10 md:ml-10 sm:ml-28 text-3xl font-bold '>10.5k</p>
            <p className='xl:ml-14 mt-1 font-semibold md:ml-0 sm:ml-16'>Sallers active our site</p>
          </div>
        </div>


      </div>

    </div>

  )
}
