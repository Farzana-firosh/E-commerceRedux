import { useEffect, useState } from "react";
import { data } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import "../ProductList/Productlist.css";
import { fetchNewProducts } from "../Products/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
function ProductList(props) {
  const searchText = props.searchText;
  const [productList, setProductList] = useState([]);

  const dispatch = useDispatch();

  dispatch(fetchNewProducts());

  const NewProducts = useSelector((state) => {
    return state.Products.NewProducts;
  });

  const isLoading = useSelector((state) => {
    return state.Products.inProgress;
  });

  useEffect(() => {
    dispatch(fetchNewProducts());
  }, []);

  const filterProducts = NewProducts.filter((p) => {
    return p.title.toLowerCase().includes(searchText.toLowerCase());
  });
  return (
    <div className="ProductList_container">
      <div className="page-heading">
        <h1> Products </h1>
      </div>
      <div className="container d-flex flex-wrap flex-row align-items-center justify-content-center gap-3">
        {filterProducts.map((p) => {
          return <ProductCard product={p} />;
        })}
      </div>
    </div>
  );
}

export default ProductList;
