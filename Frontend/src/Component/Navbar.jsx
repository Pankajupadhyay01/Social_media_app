import React from 'react'
import { nav } from '../data/nav'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className=' w-full fixed bottom-0 flex  justify-center'>
        <div className='bg-white w-full md:w-[70%] h-full flex justify-center items-center m-auto'>
          {
            nav.map((pro, i) => (
              <div key={i} className=' text-black w-full flex flex-col justify-center items-center capitalize'>
                <Link to={pro.link} className=' bg-cyan  w-auto p-2 rounded-full text-blue-900 font-bold text-[20px]'>
                  <pro.icon />
                </Link >
                <Link to={pro.link} className='font-[20px] text-blue-900'>
                  {pro.title}
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Navbar