import React, { useState } from 'react'

const ImageProduct = (image) => {
    const [mainImg, setmainImg] = useState(image)



  return (
    <div> 
      
      <div className="m-10 flex justify-center ">
              <img src={image} className="w-80 rounded-xl" alt={image}></img>
            </div>

            {/* <div className="flex flex-row justify-center">
                {" "}
                <img
                  src={link}
                  className="h-36 mx-5 hover:contrast-50"
                  alt="img"
                ></img>
                <img
                  src={link}
                  className="h-36 mx-5 hover:contrast-50"
                  alt="img"
                ></img>
                <img
                  src={link}
                  className="h-36 mx-5 hover:contrast-50"
                  alt="img"
                ></img>
        
            </div> */}
      {/* {link.map((curElem, index)=>{
      
      <img
    src={mainImg.url}
    className="h-36 mx-5 hover:contrast-50"
    alt="img"
    onClick={()=> setmainImg(curElem)}
  ></img>
    })
      }  */}
  </div>  
  )
}

export default ImageProduct