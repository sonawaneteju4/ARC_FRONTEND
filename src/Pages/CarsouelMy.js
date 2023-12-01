import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGlobleContext } from '../context/context';
import ProductElem from './ProductElem';
import Spinner from '../component/Spinner';

const CarsouelMy = () => {
  const {isLoading , featureProducts} = useGlobleContext();
  if(isLoading){
    return
  }
   
  return (
    <div className='grid lg:grid-cols-4 gap-5 sm:grid-cols-1 md:grid-cols-2'>
      
{
  featureProducts.map((curElem)=>{
    return<ProductElem key={curElem._id} {...curElem}/>;
  })
}

    </div>
  )
}

export default CarsouelMy