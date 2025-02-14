
import { useDispatch } from "react-redux";
import { resetCheckout } from "../redux/CheckoutSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const OrderSuccess = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCheckout());
  }, [dispatch]);

  return (
    <div className="container d-flex justify-content-center align-items-center flex-column" style={{height: "100vh"}}>  
      <h2>Order Placed Successfully! 🎉</h2>
      <FontAwesomeIcon icon={faCircleCheck} className="text-success" style={{ width: "5rem", height: "5rem" }} />
      <p>Thank you for shopping with us.</p>
      <Link to="/" className="btn btn-sm btn-outline-success" >Go Back to Home</Link>
    </div>
  );
};

export default OrderSuccess;
