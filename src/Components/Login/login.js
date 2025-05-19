import Loginimage from "../Assets/images/loginimage.jpg";
import Login_image from '../Assets/images/loginpageside.jpg';
import "../Login/login.css";
// import {Link} from
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Login() {
const navigate = useNavigate();

const loginHandle = () => {

  navigate('/')
}

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100" style={{backgroundColor:'black'}}>
      <div className="container">
        <div className=" row-div row no-gutters">
          <div className="col-md-6  d-none d-md-flex  justify-content-center align-items-center p-0">
            <img
              src={Login_image}
              className="w-100 h-100"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="formcontainer col-md-6  d-flex justify-content-center align-items-center p-0">
            <form className="p-5 w-100 " style={{ maxWidth: "100%" }}>
              <h1> Welcome Back!</h1>
              <div className="mb-3 text-start">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="name@gmail.com"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3 text-start">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="mb-3 form-check text-start">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <div className="remember_me">
                  <label className="form-check-label" for="exampleCheck1">
                    Remember Me
                  </label>
                  <span>
                    <a href="" style={{ color: "red" }}>
                      Forgot Password?{" "}
                    </a>{" "}
                  </span>{" "}
                </div>
              </div>
              <div className="mb-3 text-center">
                {" "}
                <button onClick={loginHandle} type="submit" className="btn btn-primary login-btn w-100">
                  Login
                </button>{" "}
              </div>
              <div className="text-center mb-2">or</div>
              <div className="mb-3 text-start">
                <button className="btn btn-outline-dark w-100">
                  Login with Google
                </button>
              </div>
              <div className=" d-flex justify-content-center gap-4 align-items-center ">
                <span>Don't Have an account?</span>
                <div className="d-flex">
                  {" "}
                  <button onClick={()=> navigate('/SignUp')} type="button" className="btn btn-primary signup-btn ">
                    Sign Up!
                  </button>{" "}
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* //--row// */}
      </div>
    </div>
  );
}

export default Login;
