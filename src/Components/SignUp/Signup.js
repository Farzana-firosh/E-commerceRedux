import '../SignUp/signup.css'
import { useNavigate } from 'react-router-dom';
function SignUp() {
  const Navigate = useNavigate();
    return ( 
<div className="container-fluid d-flex align-items-center justify-content-center vh-100" style={{backgroundColor:'black'}}> 
<div className="signup_container">
    <h2>Create an account</h2>
   <div className="mb-3">
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Username"/>
</div> 

<div className="mb-3">
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email"/>
</div> 

<div className="mb-3">
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Phone Number"/>
</div> 

<div className="row g-3 align-items-center">
 
  <div className="col-auto">
    <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" placeholder="Enter Your Password"/>
  </div>
  <div className="col-auto">
    <span id="passwordHelpInline" className="form-text">
      Must be 8-20 characters long.
    </span>
  </div>
</div>

 <div className="mb-3 text-center">
                {" "}
                <button type="submit" className="btn btn-primary login-btn w-100">
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
                <span>Already Registered User?</span>
                <div className="d-flex">
                  {" "}
                  <button  onClick= {()=>Navigate('/Login')} type="button" className="btn btn-primary signup-btn ">
                    Login
                  </button>{" "}
                </div>
              </div>

    </div> 
    </div>);
}

export default SignUp;