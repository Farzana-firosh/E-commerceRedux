// import '../ProductCard/Productcard.css'
// import { useContext } from "react";
// import CartContext from "../Context/CartSlice";
import { addToCart } from '../Context/CartSlice';
import {useDispatch} from 'react-redux';

import { NavLink } from "react-router-dom";
function ProductCard(props) {
  const prod = props.product;
  // const { addToCart } = useContext(CartContext);
   const dispatch = useDispatch();

  return (
    <>
      <div className="card product-card-small" style={{ width: "18rem" }}>
        <div className="image-container d-flex align-items-center justify-content-center">
          {" "}
          <img
            src={prod.image}
            className=" productcard_image "
            alt="..."
          />{" "}
        </div>

        <div className="card-body d-flex flex-coulmn justify-content-center">
          <div>
            {/* <h5 className="card-title">{prod.title} </h5> */}
            <NavLink
              to={"/Products/" + prod.id}
              className="card-title card-title-link"
            >
              {" "}
              <h5>{prod.title} </h5>
            </NavLink>

            <p className="card-text">{prod.description}</p>
            <div
              className="card-body text-center"
              style={{ fontSize: "15px", fontWeight: "bold" }}
            >
              {" "}
              Category : {prod.category}
            </div>
            <div className="card-body text-center" style={{ fontSize: "25px" }}>
              ₹ {prod.price}
            </div>

            <div className="d-flex align-items-center justify-content-center">
              {" "}
              <button
                onClick={() => dispatch(addToCart(prod))}
                className=" button_cart btn btn-dark "
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
