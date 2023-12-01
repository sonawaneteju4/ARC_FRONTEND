import React from "react";
import { Link} from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";


const NotFound = () => {
  const [text] = useTypewriter({
    words: ["Page Not Found !", "Oops !"],
    loop: 0,
    typeSpeed: 80,
  });
  // let navigate = useNavigate();
 
  return (
    <div className="mt-20 h-screen flex lg:flex-row flex-col justify-center  items-center">
      <div className="bg-yellow-400 h-40 w-40 rotate-45">
      <span className="flex">
  <span className="animate-ping absolute inline-flex lg:h-full lg:w-full  rounded-full bg-red-200 opacity-75">

  </span>
</span>
        <div className="text-center items-center justify-center flex h-40 w-40 ">
          <p className="-rotate-45 text-5xl font-bold font-mono">404</p>
        </div>
        
      </div>
      <div className="p-10">
        <div className="h-10">
        <h3 className="lg:text-3xl text-xl font-mono ">{text} 
        {/* <span className="text-4xl font-bold">|</span> */}
        </h3>
        </div>
        <p className="font-mono lg:text-base text-sm  ">  We are sorry but the page you are looking for might have been removed <br/>or temporarily Unavailable. </p>
          
        <Link to="/home" > 
        <button 
                  className="mt-3 px-3 py-2 bg-black text-white font-medium text-sm leading-snug  rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out  flex justify-center items-center mb-3"
                >
           
                  
                 Go To Homepage
                </button>
                  </Link>
      </div>
    </div>
  );
};

export default NotFound;
