import '../ProductCard/Productcard.css'
import { Link, NavLink } from 'react-router-dom';

import { addToCart } from '../Context/CartSlice';
import {useDispatch} from 'react-redux';
function ProductCard(props)
 {
    const prod = props.product
    // const { addToCart } = useContext(CartContext) 
    const dispatch = useDispatch();
    return ( 
    
    <>
    


<div className="card" style={{width: "18rem"}}>
     <div className="image-container d-flex align-items-center justify-content-center">  <img src={prod.image} className=" productcardimage " alt="..."/> </div>

  <div className="card-body">
    <NavLink to={'/Products/' + prod.id} className="card-title card-title-link" >      <h5 >{prod.title} </h5>
 </NavLink>


    {/* <h5 className="card-title">{prod.title} </h5> */}
    <p className="card-text">{prod.description}</p>
    <div className="card-body text-center" style={{fontSize:'15px', fontWeight:'bold'}}> Category : {prod.category}
  </div>
  <div className="card-body text-center" style={{fontSize:'25px'}}>
   ₹ {prod.price}
  </div>
    <button  onClick={() => dispatch(addToCart(prod))} className=" button_cart btn btn-dark" >Add to Cart</button>
  </div>
</div>
   
  
    
    </> );
}

export default ProductCard;