import React,{useEffect, useState} from 'react'
import axios from 'axios'

const Info = () => {
    const[info,setinfo]=useState({
        name:{
            firstname:"",
            lastname:""
        },
        email:"",
    })
    const api="https://fakestoreapi.com/users/1";
    const data= async(api)=>{
    const res = await axios.get(api);
    console.log("hell", res);
    setinfo(res.data)
    }

    useEffect(()=>{
        data(api);
        // localStorage.removeItem("usertoken")
    }, [])


  return (
    <>
      Name:{info.name.firstname} {info.name.lastname} <br />
      Email: {info.email}
      


    </>
  )
}

export default Info
