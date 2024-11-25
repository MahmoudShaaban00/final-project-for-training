import React, { useEffect, useState } from 'react'
import flashProducts from '../flashProducts'
import { FaStar } from 'react-icons/fa'

export default function CardFlash({ addtocart }) {
  const [hoveredProductId, setHoveredProductId] = useState(null); // Track hovered product's ID




  return (

    <div>
      <div className='grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-8'>
        {
          flashProducts.map((curElm) => {
            return (
              <div key={curElm.id}>
                <div className='rounded p-0 bg-slate-200'
                    onMouseEnter={() => setHoveredProductId(curElm.id)}  
                    onMouseLeave={() => setHoveredProductId(null)}>
                  <img src={curElm.img} className='mx-auto p-10  h-[200px]' alt={curElm.title} />

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
                  <div className='flex'>
                    <h1 className='mr-5 text-red-500'>${curElm.price}</h1>
                    <del>${curElm.oldprice}</del>
                  </div>
                  <span className=' text-yellow-600 flex gap-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>

                </div>
              </div>
            )
          }
          )
        }
      </div>
    </div>
  )
}
