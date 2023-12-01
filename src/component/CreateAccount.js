import React, {useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const CreateAccount = ({onClick}) => {
  // const [msg, setmsg] = useState();
  // const [type, settype] = useState();
  const [credentails, setCredentails] = useState({ email: "", password: "" , password:"", phone:""});
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name, email, password, phone} = credentails;
    const response = await fetch(`${process.env.REACT_APP_BASE_API}/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       name,
       phone,
        email,
        password
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //save the auth token
      sessionStorage.setItem("token", json.authtoken);
      navigate("/user");
      alert("Account Created SuccessFully", "#64e894")
      
      // settype("#64e894");
    } else {
      alert("Invalid Credentials", "#64e894")
      // settype("#64e894");
    }
  };
  const onChange = (e) => {
    setCredentails({ ...credentails, [e.target.name]: e.target.value });
  };  
  return (
    <div className="flex justify-center mx-10 w-96">

      
        <form onSubmit={handleSubmit}>
        <div className="py-5">
          <TextField className="w-full"  onChange={onChange} id="name" name="name" label="Name" variant="outlined" required />
        </div >
        <div  className="py-2">
          <TextField id="email" name="email" onChange={onChange} label="Email" variant="outlined" required />
        </div>
        <div  className="py-2">
          <TextField
          onChange={onChange}
            id="phone"
            name="phone"
            label="Mobile Number"
            variant="outlined"
            required
            />
        </div>
        <div  className="py-2">
          <TextField id="password" name="password" onChange={onChange} label="Password" type="password" variant="outlined" required />
        </div>
<div className="py-2">
        <button type="submit" className=" py-3 bg-black text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3">
          {/* Facebook */}
          <span className="text-2xl px-2">
            <AiOutlineUsergroupAdd />
          </span>
          Create New Account
        </button>
        {/* <p className="alert text-center">
              {msg ? (
                <p
                  className="rounded-xl mt-4 p-2"
                  style={{ backgroundColor: `${type}` }}
                >
                  {msg}
                </p>
              ) : null}
            </p> */}
</div>
            </form>
    
    </div>
  );
};

export default CreateAccount;
