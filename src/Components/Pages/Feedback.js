import { useNavigate } from "react-router-dom";
function Feedback () {
    const navigate= useNavigate();
    return ( 
        <div className="container d-flex flex-column justify-content-center align-items-center text-center"
      style={{ minHeight: '100vh' }}>
        <h1> Your Feedback have been Submitted! </h1>
        <h4>Thank you  for your patience. Will get in touch with you shortly.</h4>
        <button className='btn btn-dark 'onClick={()=>navigate ('/')} style={{backgroundColor:'black'}}>Return to Home </button>
        </div>
     );
}

export default Feedback ;