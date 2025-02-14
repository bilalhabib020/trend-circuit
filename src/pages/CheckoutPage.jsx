
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo, placeOrder } from "../redux/CheckoutSlice";
import { clearCart } from "../redux/CartSlice";
import { useNavigate } from "react-router-dom";
import MockPaymentForm from "../components/MockPaymentForm";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems, totalPrice } = useSelector((state) => state.cart);


  const handlePaymentSuccess = () => {
    alert("Payment Successful! 🎉 (Mock Payment)");
    dispatch(placeOrder());
    dispatch(clearCart());
    navigate("/order-success");
  };

  return (
    <div className="container d-flex justify-content-around align-items-center" style={{ height: "100vh" }} >
        <div className="col-5" >
        <MockPaymentForm totalAmount={totalPrice} onSuccess={handlePaymentSuccess} />
        </div>
        <div className="col-5">
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="card rounded-0" style={{ width: "100%" }}>
          <div className="card-header text-center">
    Order Summary
  </div>
  <ul className="list-group list-group-flush" id="order-summary-list">
  {cartItems.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between">
              <span className="col-9">{item.title} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
            ))}
  </ul>
  <div className="card-footer bg-dark text-light rounded-0">
  <h5 style={{width: "100%"}} className="d-flex justify-content-between mb-1"><span>Total <small style={{fontSize: "1rem"}} className="lead">(incl 15% tax)</small></span><span>${(totalPrice + totalPrice * 0.15).toFixed(2)}</span></h5>
  </div>
     
  </div>
          </div>
      )}
      </div>
    </div>
  );
};

export default CheckoutPage;
