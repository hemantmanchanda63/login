import React, { useState } from 'react'
import axios from "axios"

const Register = () => {
    const[first,setFirst]=useState("");
    const[last,setLast]=useState("");
    const[email,setEmail]=useState("");
    const[password, setPassword]=useState("")
    const[conpassword, setconPassword]=useState("")
    const[status,setStatus]=useState(false);

    const handling=()=>{
        axios({
            url:"https://fakestoreapi.com/users",
            method:"POST",
            data:{
                email:email,
                last:last,
                password:password,
                name:{
                    firstname:first,
                    lastname:last,
                }
            }
        }).then(res=>{
            console.log(res,"Hello")
            if(res.status === 200){
                setStatus(true);
            }
        })
    }

    // if(status){
    //     window.location.reload()
    // }
  return (


<section className="vh-100 pt-5" style={{backgroundColor:"#eee"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" value={first}  onChange={(e) => {
                setFirst(e.target.value)
            }}  />
                      <label className="form-label" >First Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="last" className="form-control" value={last}  onChange={(e) => {
                setLast(e.target.value)}}  />
                      <label className="form-label" >Last Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control" value={email} onChange={(e) => {
                setEmail(e.target.value) }} />
                      <label className="form-label"  >Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control" value={password} onChange={(e) => {
                setPassword(e.target.value)}} />
                      <label className="form-label" >Password</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" className="form-control" value={conpassword} onChange={(e) => {
                setconPassword(e.target.value)}} />
                      <label className="form-label" >Repeat your password</label>
                    </div>
                  </div>

                {status? "user Created Successfully": null}
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-primary btn-lg" onClick={handling}>Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Register
