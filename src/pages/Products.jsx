import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Spinner from "../components/Spinner";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const categories = ["All", "men's clothing", "women's clothing", "jewelery", "electronics"];

    const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);
  
    useEffect(() => {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          setProducts(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    }, []);

    return (
        <div className="d-flex flex-column justify-content-around pt-2 mt-5 align-items-center" 
        style={{ height: "100%" }} >
        <div id="product-category">
        <h1 className="text-center">Products</h1>
        <div className="btn-group mb-3">
        {categories.map((category) => (
          <button
            key={category}
            className={`btn ${selectedCategory === category ? "btn-dark" : "btn-outline-dark"} rounded-0 btn-sm`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      </div>
        <div className="container" id="product-list" >
        <div className="row" style={{ rowGap: "5px" }}>
        {loading ? (
          <Spinner />
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
      </div>
        </div>
    );
}

export default Products;