import React, { useState } from 'react'
import Spinner from '../../component/Spinner';
import AdminLoginComp from './AdminLoginComp';

const AdminLogin = () => {
    const [loading, setloading] = useState(true)

    setTimeout(() => {
        setloading(false);
      }, 1000);
  return (
    <div>
                {loading && <Spinner />}
                <AdminLoginComp/>

    </div>
  )
}

export default AdminLogin