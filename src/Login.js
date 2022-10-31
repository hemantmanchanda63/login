import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = (props) => {
    const[error,setError]=useState(false);
    const {token,setToken}= props;
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    console.log(user);
  
  const loginhandle=()=>{
    axios({
        url:"https://fakestoreapi.com/auth/login",
        method: "POST",
        data:{
            username: user,
            password: pass
        }
    }).then(res=>{
        console.log(res.data.token)
        localStorage.setItem("usertoken", res.data.token)
        setToken(res.data.token)
    }).catch(err=>{
        console.log(err);
        setError(true);
    })
  }

  return (
    <>
      <div className="container mt-5">
        <h1>Login</h1>
        <form>
          {/* <!-- Email input --> */}
          <div className="form-outline mb-4">
            <input value={user}
              type="email"
              id="form2Example1"
              className="form-control"
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
            <label className="form-label">Email address</label>
          </div>

          {/* <!-- Password input --> */}
          <div className="form-outline mb-4">
            <input
            value={pass}
              type="password"
              id="form2Example2"
              className="form-control"
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
            <label className="form-label">Password</label>
          </div>
        {error?"Username and Password is incorrect": null}
          {/* <!-- 2 column grid layout for inline styling --> */}
          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              {/* <!-- Checkbox --> */}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example31"
                  checked
                />
                <label className="form-check-label"> Remember me </label>
              </div>
            </div>

            <div className="col">
              {/* <!-- Simple link --> */}
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          {/* <!-- Submit button --> */}
          <button type="button" className="btn btn-primary btn-block mb-4" onClick={loginhandle}>
            Sign in
          </button>

          {/* <!-- Register buttons --> */}
          <div className="text-center">
            <p>
              Not a member? <Link to="/register">Register</Link>
            </p>
            <p>or sign up with:</p>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-facebook-f"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-google"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-twitter"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-github"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
