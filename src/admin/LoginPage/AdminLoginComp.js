import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLoginComp = () => {
  const [credentails, setCredentails] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const [errMessage, seterrMessage] = useState(" ");

  const handleClick = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `${process.env.REACT_APP_BASE_API}/authAdmin/loginAdmin`,
      {
        method: "POST",
        headers : {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentails.email,
          password: credentails.password,
        }),
      }
    );
    const json = await response.json();
    console.log(json);
    if (json.success) {
      sessionStorage.setItem("a-token", json.authtoken);
      setTimeout(() => {
        navigate("/admin/adminHome");
      }, 1000);
    } else {
      seterrMessage("Enter Correct Details");
    }
  };


  const onChange = (e) => {
    setCredentails({ ...credentails, [e.target.name]: e.target.value });
  };
  return (
    <>
      <section class="bg-gray-200/50 ">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
          >
            <p>AR CUSTOMS</p>
          </a>
          <div class="w-full rounded-lg shadow backdrop-blur-sm backdrop:bg-slate-700 dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Admin Login
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={onChange}
                    value={credentails.email}        
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={onChange}
                    value={credentails.password}
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>

                <button
                  onClick={handleClick}
                  class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-black focus:ring-primary-800"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminLoginComp;
