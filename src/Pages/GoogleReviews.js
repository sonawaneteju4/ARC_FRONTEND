import React from 'react'
import CarsoulReview from './CarsoulReview';
const GoogleReviews = () => {
  return (
    <div>
         <div className="mt-5">
          <p className="font-bold text-3xl lg:text-4xl text-center mb-5" style={{color: "dodgerblue"}}>
            Google Revies
          </p>
          <div>
            <CarsoulReview/>
          </div>
          <div className='flex justify-center mt-10'>
          <div className='mx-2'><a target='_blank' href='https://www.google.com/maps/place/WRAP+ON/@18.661648,73.752376,16z/data=!4m8!3m7!1s0x3bc2b9cbe07310ed:0x39c61089f1371582!8m2!3d18.6616478!4d73.7523758!9m1!1b1!16s%2Fg%2F11hzyz385t?hl=en&entry=ttu' className='px-7 mt-5 py-3 mr-2 bg-black text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out'>View More</a></div>
          <div className='mx-2'><a target='_blank' href='https://g.page/r/CYIVN_GJEMY5EB0/review' className='px-7 mt-5 py-3 mr-2 bg-black text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out'>Add Review</a></div>
          </div>
        </div>
    </div>
  )
}

export default GoogleReviews