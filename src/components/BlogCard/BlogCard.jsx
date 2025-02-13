import React from 'react'
import { Link } from 'react-router';

export default function BlogCard({ title, image }) {
  return (
    <>
      <div className="bg-green-50 m-5 py-4 px-6 shadow-lg hover:shadow-xl border border-green-50 hover:border-orange-50 hover:bg-orange-50 rounded-md cursor-pointer">
        
        <img src={image} alt={title} className="h-[200px] block  mx-auto w-full object-contain md:my-4 md:rounded-lg"/>
        <p className='text-center text-xl font-semibold mb-4 mt-2'>{title}</p>
        
      </div>
    </>
  )
}
