import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    console.log(email, password);
    // Perform login request to your API
  };

  
  return (
    <>
    <div className="flex h-screen justify-center items-center bg-gray-900">
      <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-lg font-medium mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email Id</label>
          <input
            className="border border-gray-400 p-2 rounded-lg w-full"
            type="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Password</label>
          <input
            className="border border-gray-400 p-2 rounded-lg w-full"
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </div>
        <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
          Login
        </button>
      </form>
    </div>
    <div className=''>
      
    </div>
            </>
  );
}

export default Login;
