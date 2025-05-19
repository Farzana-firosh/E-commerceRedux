
import { useDispatch,useSelector } from "react-redux";
import { addToCart, clearCart, removeFromCart } from '../Context/CartSlice';
import { useState } from "react";
import { NavLink } from "react-router-dom";
function Cart() {
  // const { products } = useContext(CartContext);

const dispatch = useDispatch() ;

const products = useSelector ((state) => state.Cart.items)
  const totalAmount = products.reduce((total, prod) => total + (prod.price * prod.quantity || 0),0);

  const [Count , setCount] = useState(1);
  function addCount() {
setCount(Count + 1)
  }
  function removeCount(){
    setCount ( Count >1 ? Count-1 :  1)
  }
  return (
    <div className="container " style={{  width:'400px', paddingTop:'80px'}}>
        <div className='card mx-auto' style={{ maxWidth: '600px', minHeight: '300px', padding: '20px' }}> 

        
      <h2> Your Cart</h2>
      {products.length === 0 && <span className="text-center"> Your Cart is empty</span>}
      <ul className="list-group">
        {products.map((prod) => (
          <div className="row d-flex align-items-center">         
            
         <div className="col-8 d-flex align-items-center"><img src={prod.image} alt="" style={{height: '80px', objectFit:'cover', padding: '8px'}}/>
{/*   
          <span style={{
            whiteSpace: 'nowrap', overflow:'hidden',textOverflow:'ellipsis'}}>{prod.title} </span>  */}
            
            <NavLink to={'/Products/' + prod.id} className="card-title text-decoration-none text-dark " >      <span >{prod.title} </span>
 </NavLink>

            
            </div>
<div className="col-4 d-flex align-items-center justify-content-center gap-2  flex-column p-2 text-center">
<button onClick={()=>dispatch(addToCart (prod))}className="btn btn-dark p-2">+</button>
<span> {prod.quantity} </span>
<button onClick={()=>dispatch(removeFromCart(prod))} className="btn btn-dark p-2">-</button> </div>


</div>
          // <li  className="list-group-item d-flex justify-content-between align-items-center">{prod.title} </li>
        ))}
      </ul>



{products.length > 0 && (
          <div className="mt-3 d-flex justify-content-between fs-5 fw-bold">
            <span>Total Amount:</span>
            <span>₹ {totalAmount.toFixed(2)}</span>
          </div>
        )}



        <div className="d-flex justify-content-center gap-5">
            <button className="btn btn-dark">Check Out</button>
                        <button onClick={()=> {dispatch(clearCart()); }} className="btn btn-dark">Clear Cart</button>

        </div>

      </div>
    </div>
  );
}

export default Cart;




// import { useContext } from "react";
// import FilterContext from "./CartContext";
// const FilterParams = useContext(FilterContext)
// function Cart() {
//     return ( 
// <> 

// <FilterContext.Provider value ={{
//     products : []
// }}>
// <div>
//     cart
// </div>
// </FilterContext.Provider>


// </>



//      );
// }

// export default Cart;