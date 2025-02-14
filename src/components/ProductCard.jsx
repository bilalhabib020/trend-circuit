import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { useState } from "react";
import ProductModal from "./ProductModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ product }) => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    return (
        <div className="card product-card">
        <img src={product.image} className="card-img-top " alt="{product.title}" style={{ width: "100%", height: "40%" }} />
        <div className="card-body">
          <h5 className="card-title small">{product.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">${product.price}</h6>
          <button onClick={() => setShowModal(true)}  className="btn btn-sm" style={{ backgroundColor: "#EFB036" }}>
                      View
          </button>
          <button onClick={() => dispatch(addToCart(product))} className="btn btn-sm ms-1" style={{ backgroundColor: "#EFB036" }}>
          <FontAwesomeIcon icon={faCartPlus} />
          </button>

          {showModal && <ProductModal product={product} onClose={() => setShowModal(false)} />}
        </div>
      </div>
    );
    }



    export default ProductCard;