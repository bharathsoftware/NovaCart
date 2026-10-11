import React from "react";
import { CheckCircle, ShoppingBag, ArrowRight } from "lucide-react";
import "./OrderSuccess.css";

function OrderSuccess({ onBackHome }) {
  return (
    <div className="success-page">
      <div className="success-card">
        <div className="success-icon">
          <CheckCircle size={76} strokeWidth={1.6} />
        </div>

        <p className="success-label">ORDER CONFIRMED</p>

        <h1>Order Placed Successfully!</h1>

        <p className="success-message">
          Thank you for shopping with NovaCart.
          Your order has been placed successfully.
        </p>

        <div className="success-details">
          <ShoppingBag size={22} />
          <span>Your shopping journey doesn't end here!</span>
        </div>

        <button
          className="success-home-button"
          onClick={onBackHome}
        >
          <ShoppingBag size={19} />
          Back to Home
          <ArrowRight size={18} />
        </button>

        <p className="success-footer">
          Thank you for choosing NovaCart 💚
        </p>
      </div>
    </div>
  );
}

export default OrderSuccess;