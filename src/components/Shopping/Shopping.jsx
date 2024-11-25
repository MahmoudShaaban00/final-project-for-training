import React, { useState } from 'react'
import HomeProduct from '../products'

export default function Shopping({addtocart}) {

    const [hoveredProductId, setHoveredProductId] = useState(null);

  return (

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
  )
}
