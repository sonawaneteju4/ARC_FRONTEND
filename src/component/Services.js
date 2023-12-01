import React from 'react'
import { Link } from 'react-router-dom'
import { FcServices } from "react-icons/fc";

// import ServiceComp from '../Pages/ServiceComp'
import ServicesIndex from '../Pages/ServicesIndex'
import './Services.css'
import Spinner from './Spinner'
// import image from ''

const Services = () => {
  return (
<div className='mt-16 px-10 bg-white'>
  
<div className="text-5xl flex justify-center font-bold p-10">
      <span>Services</span>
      <FcServices />
    </div>
<ServicesIndex/>
</div>
  )
}

export default Services