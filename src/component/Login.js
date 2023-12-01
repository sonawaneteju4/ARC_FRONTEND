import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import LoginComp from "./LoginComp";
import Spinner from "./Spinner";
import CreateAccBtn from "./CreateAccBtn";

// import TextField from '@mui/material/TextField';

const Login = () => {
  const [loading, setloading] = useState(false);
  let navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      navigate("/user");
    } else {
      navigate("/login");
    }
  }, []);

  //   onclick = () =>{
  //     setshowModal(true)
  //   }
  // oncancel = () =>{
  //     setshowModal(false)
  //   }
  return (
    <div
      className=" flex justify-center items-center h-screen  bg-cover "
      
      style={{
        backgroundImage: `url("/image/car2.jpg")`,
      }}
    >
      {loading && <Spinner isHomePage={true} />}
      <div className="mt-20 ">
        <div className="backdrop-sepia-0 bg-white/40 backdrop-blur-sm drop-shadow-xl p-10 rounded-xl ">
          <LoginComp link={"/user"} setloading={setloading} />

        </div>
      </div>
      <div>
      
      </div>
    </div>
  );
};

export default Login;
