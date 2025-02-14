import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from "../redux/CartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div id="cart-page">  
      {cartItems.length === 0 ? <p className="fs-1">Your cart is empty.</p> : 
<div className="container">
<div className="container d-flex justify-content-between align-items-center">
      <h2>Your Cart</h2>
      {  cartItems.length > 0 && <button onClick={() => dispatch(clearCart())} className="btn btn-sm btn-outline-danger" style={{ height: "2.5em" }} >Clear Cart</button> }
      </div>
      <table className="table table-sm">
  <thead>
    <tr className="text-center">
      <th scope="col">Product</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {cartItems.map((item) => (
      <tr>
        <td className="col-6">
        <div  className="card mb-3 bg-light border-0" style={{ height: "4rem"  }} >
  <div className="row g-0">
    <div className="col-2 me-0" style={ { width: "5rem" } }>
      <img src={item.image} className="img-fluid rounded-start" alt={item.title} style={{ width: "5rem", height: "4rem" }} />
    </div>
    <div className="col-10 ms-0">
      <div className="card-body pt-0 pb-0" >
        <p className="card-title mb-0">{item.title}</p>
        <small className=" card-text text-muted mt-0"  >${item.price}</small>
      </div>
    </div>
  </div>
</div>
        </td>
        <td className="col-2 align-middle">
        <div className="d-flex align-items-center justify-content-center" style={{ gap: "10px"}} >
     <button onClick={() => dispatch(decreaseQuantity(item))} className="btn btn-sm btn-outline-dark"><FontAwesomeIcon icon={faMinus} /></button>
          <span>{item.quantity}</span>
                    <button onClick={() => dispatch(increaseQuantity(item))} className="btn btn-sm btn-outline-dark"><FontAwesomeIcon icon={faPlus} /></button>

                </div>
        </td>
        <td className="col-2 align-middle">
        <div className="d-flex align-items-center justify-content-center">
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
        </td>
        <td className="col-1 align-middle text-center">
        <button className="btn-close" onClick={() => dispatch(removeFromCart(item))}></button>
        </td>
      </tr>
    ))}
  </tbody>
</table>      
</div>
}

{ cartItems.length > 0 && 
<div className="container">
<div className="d-flex justify-content-end">
          <div className="card rounded-0" style={{ width: "25rem" }}>
          <div className="card-header text-center">
    Cart Total
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item d-flex justify-content-between"><span>Sub-total</span><span>${totalPrice.toFixed(2)}</span></li>
    <li className="list-group-item d-flex justify-content-between"><span>Tax (15%)</span><span>${(totalPrice * 0.15).toFixed(2)}</span></li>
    <li className="list-group-item d-flex justify-content-between"><span>Delivery Charges</span><span>0</span></li>
    <li className="list-group-item d-flex justify-content-between bg-dark text-light"><span>Total</span><span>${(totalPrice + totalPrice * 0.15).toFixed(2)}</span></li>
  </ul>
     

  <Link to="/checkout">
    <button className="btn btn-success rounded-0 w-100">Proceed to Checkout <FontAwesomeIcon icon={faArrowRight} /></button>
  </Link>



     
  </div>
          </div>
          </div>
}
    </div>

  );
};

export default Cart;