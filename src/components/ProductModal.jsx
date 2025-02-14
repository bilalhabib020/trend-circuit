import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const ProductModal = ({ product, onClose }) => {
    const dispatch = useDispatch();
    return (
        <div className="modal fade show d-block" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "600px" }}>
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: "#23486A", color: "white" }}>
              <h5 className="modal-title">Product detail</h5>
              <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
            </div>
            <div className="modal-body">
            <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={product.image} className="img-fluid rounded-start" alt={product.title} style={{ height: "100%" }} />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">${product.price}</h6>
        <p className="card-text small">{product.description}</p>
        <button className="btn btn-sm btn-secondary" onClick={onClose}>
                Close
              </button>
              <button onClick={() => dispatch(addToCart(product))} className="btn btn-sm ms-1" style={{ backgroundColor: "#EFB036" }}>
                Add to Cart
              </button>
      </div>
    </div>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
 export default ProductModal;
  