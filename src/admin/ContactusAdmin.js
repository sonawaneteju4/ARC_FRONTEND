import React, { useState, useEffect } from 'react'
import SpinnerGear from '../component/SpinnerGear';

const ContactusAdmin = () => {
    const API = "http://localhost:5000/api/contactus/fetchcontactus"
    const [contactus, setcontactus] = useState([]);

    const fetchApiData = async(url) => {
        try {
            const res =await fetch(url);
            const data = await res.json();
            setcontactus(data)
            console.log(data)
          } catch (error) {
            console.log(error)
            
          }
        }
      
        useEffect(()=>{
        fetchApiData(API)
      },[])
    

  return (
    <div className='mt-20'>
      <SpinnerGear/>
        <p className='text-center text-4xl m-3 font-bold'>
        ContactUs Responce    
        </p>
        <hr></hr>
        <div className='mt-5 p-10 grid grid-cols-4 gap-5'>
           { contactus.map((items)=> <div className='bg-white text-black p-5 rounded-2xl'>
                <p className='text-right text-sm text-green-400'>Date : {new Date(items.Date).toGMTString()} </p>
                <p className=''>Name : {items.name}</p>
                <p className=''>Mobile : {items.mobile} </p>
                <p className=''>Message : {items.message} </p>

            </div>)}
        </div>


    </div>
  )
}

export default ContactusAdmin