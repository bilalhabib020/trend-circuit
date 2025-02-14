import { useState } from "react";

const MockPaymentForm = ({ totalAmount, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      if (formData.cardNumber === "1234 1234 1234 1234") {
        onSuccess();
      } else {
        setError("Invalid mock card number. Use 1234 1234 1234 1234.");
      }
      setLoading(false);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="form mock-payment-form">
        <h2>Checkout</h2>

<div className="mb-1">
    <label for="name" className="form-label">Full name</label>
    <input type="text" name="name" className="form-control" id="name" 
        value={formData.name}
        onChange={handleChange}
        required  />
  </div>
  <div className="mb-1">
    <label for="email" className="form-label">Email address</label>
    <input type="email" name="email" className="form-control" id="email"
        value={formData.email}
        onChange={handleChange}
        required />
  </div>
  <div className="mb-1">
    <label for="address" className="form-label">Shipping address</label>
    <textarea name="address" className="form-control" id="address" 
        value={formData.address}
        onChange={handleChange}
        required />
  </div>
  <div className="mb-1">
    <label for="cardnumber" className="form-label">Card Number (Enter 1234 1234 1234 1234)</label>
    <input type="text" name="cardNumber" className="form-control" id="cardnumber" 
    value={formData.cardNumber}
    onChange={handleChange}
    required />
  </div>
  {error && <p style={{ color: "red" }}>{error}</p>}
  <button type="submit" className="btn btn-sm text-white mt-2" style={{ backgroundColor: "#23486A" }} disabled={loading} >{loading ? "Processing..." : "Pay Now"}</button>
    </form>
  );
};

export default MockPaymentForm;

{/* 
    
        <h3>Pay ${totalAmount.toFixed(2)}</h3>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <textarea
        name="address"
        placeholder="Shipping Address"
        value={formData.address}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="cardNumber"
        placeholder="Card Number (e.g. 4242 4242 4242 4242)"
        value={formData.cardNumber}
        onChange={handleChange}
        required
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit" disabled={loading}>
        {loading ? "Processing..." : "Pay Now"}
      </button>
    
    */}
