import Header from "../Header/Header";
import Banner from "../Banner/Bannerr";
import Footer from "../Footer/Footer";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import Productimage_1 from "../Assets/images/homeprodimg1.jpg";
import Productimage_2 from "../Assets/images/homeprodimg2.jpg";
import Productimage_3 from "../Assets/images/homeprodimg_3.jpg";
import Electronicsimg from "../Assets/images/prodcircle_1.jpg";
import Shoesimg from "../Assets/images/prodcircle_2.jpg";
import jewleryimg from "../Assets/images/prodcircle_3.jpg";
import Clothingimg from "../Assets/images/prodcircle_4.jpg";
import Bagimg from "../Assets/images/prodcircle_5.jpg";
import { useState, useEffect } from "react";
import ProductCard from "./HomeProductcard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../Home/home.css";
function Home() {
  const [productList, setProductList] = useState([]);
  function loadProducts() {
    fetch("https://fakestoreapi.com/products?limit=8").then((response) => {
      response.json().then((data) => {
        setProductList(data);
      });
    });
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <Header />
      <Banner />

      <div className="home_div_2 container">
        <div className="div2_2">
          <div className="icon-circle">
            {" "}
            <FontAwesomeIcon
              icon={faTruck}
              size="xl"
              style={{ color: "#000000" }}
            />{" "}
          </div>

          <div className="icon_text">
            {" "}
            <h5> Free Shopping</h5>{" "}
          </div>
        </div>

        <div className="div2_2">
          <div className="icon-circle">
            {" "}
            <FontAwesomeIcon
              icon={faCreditCard}
              size="xl"
              style={{ color: "#000000" }}
            />{" "}
          </div>

          <div className="icon_text">
            {" "}
            <h5> Flexible Payment</h5>{" "}
          </div>
        </div>

        <div className="div2_2">
          <div className="icon-circle">
            {" "}
            <FontAwesomeIcon icon={faCoins} style={{ color: "#000000" }} />{" "}
          </div>

          <div className="icon_text">
            {" "}
            <h5> Earn Points </h5>{" "}
          </div>
        </div>
      </div>

      <div className="home-cards card-group gap-4 p-3 ">
        <div className="home-card card">
          <img
            src={Productimage_2}
            className="card-img-top"
            alt="Productimage_1 "
          />
        </div>
        <div className="home-card card">
          <img
            src={Productimage_1}
            className="card-img-top"
            alt="Productimage_2 "
          />
        </div>
        <div className="home-card card">
          <img
            src={Productimage_3}
            className="card-img-top"
            alt="Productimage_3 "
          />
        </div>
      </div>

      <div className="home_cateogry">
        <div style={{ padding: "10px" }}>
          {" "}
          <h2 style={{ padding: "10px", fontSize: "40px" }}>
            Choose your Category{" "}
          </h2>
          <span style={{ fontSize: "14px" }}>
            Explore a wide range of products tailored just for you. Whether
            you're looking for the latest gadgets, trendy fashion, or home
            essentials — find it all in one place!
          </span>
        </div>

        <div className="d-flex circle_card_div flex-wrap justify-content-center p-4">
          <div className="card circle-card text-center border-0">
            <img
              src={Electronicsimg}
              className=" circle-img mx-auto"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center">Electronics</h5>
              <p className="card-text text-center">50% Off</p>
            </div>
          </div>

          <div className="card circle-card text-center border-0">
            <img src={Shoesimg} className=" circle-img mx-auto" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Shoes</h5>
              <p className="card-text text-center">20%Off</p>
            </div>
          </div>

          <div className="card circle-card text-center border-0">
            <img src={jewleryimg} className=" circle-img mx-auto" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Jewelery</h5>
              <p className="card-text text-center">50% Off </p>
            </div>
          </div>

          <div className="card circle-card text-center border-0">
            <img src={Clothingimg} className=" circle-img mx-auto" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Clothing</h5>
              <p className="card-text text-center">Buy 1 Get 1 Free </p>
            </div>
          </div>

          <div className="card circle-card text-center border-0">
            <img src={Bagimg} className=" circle-img mx-auto" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Bags</h5>
              <p className="card-text text-center">30% Off</p>
            </div>
          </div>
        </div>

        <div className="home_product_div">
          <div className="page_heading">
            <h1 style={{ color: "white" }}> Recommended Products </h1>
          </div>

          <div className=" d-flex flex-wrap flex-row align-items-center justify-content-center gap-3">
            {productList.map((product) => (
              <ProductCard product={product} />
            ))}{" "}
          </div>
          {/* <div className='container d-flex flex-wrap flex-row align-items-center justify-content-center gap-3'>
    {
        productList.map(product => (
  <ProductCard  product={product} />
))
    } </div> */}
        </div>
      </div>
    </>
  );
}

export default Home;
