import React, {useEffect, useState} from 'react'
import axios from 'axios'

const UploadGallery = () => {
    const [data, setdata] = useState([])
  return (
    <div>
        <form className='' action='/upload' method='post' encType='multipart/form-data'>
            <input type="file"></input>
            <input type="text" className="form-control" placeholder="Name" name="name"></input>
            <input type="text" className="form-control" placeholder="type" name="type"></input>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default UploadGallery