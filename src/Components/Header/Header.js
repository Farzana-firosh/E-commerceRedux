import Logoimage from '../Assets/images/logoimg.jpg'
import { Link,NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../Header/header.css'
import { useNavigate } from 'react-router-dom';
// import CartContext from '../Context/CartContext';
// import { useContext } from 'react';

import { useSelector } from 'react-redux';

import './header.css'


function Header(props) {

  const headerfn= props.callBackofheader;
const items = useSelector ((state) => state.Cart.items);
   function onSearch(event) {
    // setSearchText($event.target.value);
    if (typeof headerfn === 'function') {
       headerfn(event.target.value)
    navigate ('/Products')
    }else console.warn('callBackofheader prop is not a function:', headerfn);
    
  }
  const navigate = useNavigate();
// navigate ('/SignUp')

    return (  

<div>
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top pe-1"  >
  <div className="container-fluid">

 <NavLink className="navbar-brand" to="#">
      {/* <img src={Logoimage} alt="Bootstrap" width="100" height="25" style={{objectFit:'cover'}}/> */}
      <span className="navbar-brand text-center" style={{fontSize:'30px',fontFamily:'satisfy', letterSpacing:'5px'}}>Pixary</span>
    </NavLink>

    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
     <div className=" d-flex align-items-center justify-content-center w-100 text-center"> <ul className="navbar-nav d-flex  gap-4 mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Products">Products</NavLink>
        </li>

   <li className="nav-item">
          <NavLink className="nav-link" to="/About">About Us</NavLink>
        </li>


 <li className="nav-item">
          <NavLink className="nav-link" to="/Contact">Contact Us</NavLink>
        </li>



         <li className="nav-item">
          <NavLink className="nav-link" to="/Login">Login</NavLink>
        </li>




        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account & List
          </NavLink>
          <ul className="dropdown-menu">
             <li className='px-2'><button onClick={() => navigate('/SignUp')} className=" btn btn-primary w-100" >Sign Up</button></li>
            
            
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item" to="#">Account</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Orders</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Recommendations</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">WishList</NavLink></li>

          </ul>
        </li>
        
      </ul>
      </div>
      {/* for big */}
      <form className="d-none d-lg-flex me-5 ps-3" role="search" >
        <input className="form-control me-2 text-center" type="search" placeholder="Search Products. .  ." aria-label="Search"  style={{ width: '200px'}} onChange={onSearch}/>
        <button className="custom-search-btn d-flex align-items-center justify-content-center" type="submit"  > <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#000000" }} />
 </button>
      </form>
  
{/* for small screen */}
<form className="w-100 d-lg-none d-flex justify-content-center mt-3" role="search" onChange={onSearch}>
        <input className="form-control me-2 text-center" type="search" onChange={(event) => props.callBackofheader(event.target.value)}  placeholder="Search Products. .  ." aria-label="Search"  style={{ width: '200px' }}/>
        <button className="custom-search-btn" type="submit"> <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#000000" }} />
 </button>
      </form>



  
<div className="w-100 d-lg-none d-flex justify-content-center mt-3"><button onClick={()=> navigate('/cart')} className='cart_div me-2'><FontAwesomeIcon icon={ faShoppingCart }  style={{color: "#000000",}} /></button></div>

<div  className="d-none d-lg-block"><button onClick={()=> navigate('/cart')} className='cart_div me-2'><FontAwesomeIcon icon={ faShoppingCart }  style={{color: "#000000", position:'relative'}} />


{items.length > 0 && (
    <span style={{
      position: 'absolute',
      top: '7px',
      right: '18px',
      background: 'red',
      color: 'white',
      borderRadius: '50%',
      padding: '2px 6px',
      fontSize: '12px',
      fontWeight: 'bold',
      lineHeight: '1',
      minWidth: '18px',
      textAlign: 'center',
      userSelect: 'none',
    }}>
      {items.length}
    </span>
  )}

</button></div>

    </div>
  </div>
</nav>




   </div> );
}

export default Header;