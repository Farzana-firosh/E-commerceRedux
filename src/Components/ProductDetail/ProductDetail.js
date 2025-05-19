import { useParams } from "react-router-dom";
import {useEffect, useState} from  'react'
import '../ProductDetail/productdetail.css'
function ProductDetail() {
    const params = useParams();
    const prodId = params.productId;
    const [product, setProduct] = useState();
    
    function loadProductById() {
    fetch ('https://fakestoreapi.com/products/' + prodId).then((response)=>{
        response.json().then((data)=>{
setProduct(data);
         }).catch(error=>{
            console.log(error);
         })
      
    
})
    }
useEffect(()=>{loadProductById()},[prodId]);
    

if (!product) {
    return <p>Loading...</p>;
  }

    return ( 
<>

{/* <h3>{[product.title]}</h3> */}

<div className="product-cart-container"> <div className="card mb-3" style={{maxwidth: 540}}>
  <div className=" product-detail-card row g-0">
    <div className=" colo-12 col-md-4">
      <img src={product.image} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className=" d-flex flex-column col-12 col-md-8">
      <div className="card-body">
        <h1 className="card-title" style={{fontWeight:'bolder'}}>{product.title}</h1>
        <span className="d-flex gap-2"> <span style={{fontWeight: 'bold'}}>  Rating : </span> {product.rating.rate}</span>
        <span className="card-text">{product.description}</span>
        <span className="card-text d-flex gap-2"> <span style={{fontWeight:'bold'}}>Category : </span>{product.category}</span>


   <div className="button_div"> <button className="product_detail_button">Add to Cart</button>
     <button className="product_detail_button">Buy Now</button> </div>
     
<div> 
<div className="btn-group">
  <button type="button" className="btn btn-dark dropdown-toggle" style={{backgroundColor:'black'}} data-bs-toggle="dropdown" aria-expanded="false">
    Size
  </button>
  <ul className="dropdown-menu text-center">
    <li>XS</li>
    <li>S</li>
    <li>L</li>
    <li>XL</li>
  </ul>
</div>








 </div>     
   




<div>
    <h6 style={{fontWeight:'bold'}}>Product Details </h6>
    <p> Crafted with premium quality materials, this product ensures durability and comfort. Perfect for daily use or special occasions.</p>
</div>

<div>
    <h6 style={{fontWeight:'bold'}}> Shipping </h6>
    <p> We offer free standard shipping on all orders. Orders are typically delivered within 5–7 business days.</p>
</div>

<div>
    <h6 style={{fontWeight:'bold'}}>Returns </h6>
    <p> Hassle-free returns within 30 days. If you're not satisfied, simply return the product for a full refund</p>
</div>






      </div>
    </div>
  </div>
</div></div>




</>

     );
}

export default ProductDetail;