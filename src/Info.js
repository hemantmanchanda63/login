import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Info = () => {
    const navigate = useNavigate();
    const[info,setinfo]=useState({
        name:{
            firstname:"",
            lastname:""
        },
        email:"",
        address:{
            city:"",
            street:"",
            zipcode:'',
        },
        phone:"",
    })
    const api="https://fakestoreapi.com/users/1";
    const data= async(api)=>{
    const res = await axios.get(api);
    console.log("hell", res);
    setinfo(res.data)
    }
    const logout = () =>{
        navigate('/');
        localStorage.removeItem("usertoken");
        // alert("hell")
    }
    
    useEffect(()=>{
        data(api);
        localStorage.removeItem("usertoken")
    }, [])

  return (
    <>
    <div className="container">
        <div className="data text-center mt-5">
            <h1>User Details</h1>
        Name:{info.name.firstname} {info.name.lastname} <br />
      Email: {info.email}<br />
      City: {info.address.city}<br />
      Street: {info.address.street}<br />
      Zipcode: {info.address.zipcode}<br />
      Phone: {info.phone}<br />
      </div>
      <button type="button" className="btn btn-primary btn-block mt-4" onClick={logout}>Logout
          </button>
      </div>
    </>
  )
}

export default Info
