
import React, { useState } from "react";
import "./Checkout.css";


export default function Checkout({
  cart = [],
  cartTotal = 0,
  onBack,
  onPlaceOrder,
}) {
  const [payment, setPayment] = useState("COD");

  const handleOrder = (event) => {
    event.preventDefault();

    if (typeof onPlaceOrder === "function") {
      onPlaceOrder();
    }
  };

  return (
    <div className="checkout-page">
      <header className="checkout-header">
        <h1>NovaCart</h1>
        <p>Secure Checkout</p>
        {onBack && (
          
<button className="back-shopping-btn" onClick={onBack}>
  ← Back to Shopping
</button>

        )}
      </header>

      <h2 className="checkout-title">Complete Your Order</h2>

      <form className="checkout-layout" onSubmit={handleOrder}>
        <div className="checkout-left">
          <section className="checkout-card">
            <h3>📍 Delivery Address</h3>

            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />

            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              pattern="[0-9]{10}"
              title="Enter a 10-digit phone number"
              required
            />

            <label>Full Address</label>
            <textarea
              placeholder="House number, street, area"
              required
            />

            <div className="checkout-row">
              <div>
                <label>City</label>
                <input type="text" placeholder="City" required />
              </div>

              <div>
                <label>PIN Code</label>
                <input
                  type="text"
                  placeholder="6-digit PIN"
                  pattern="[0-9]{6}"
                  title="Enter a 6-digit PIN code"
                  required
                />
              </div>
            </div>
          </section>

          <section className="checkout-card">
            <h3>💳 Payment Method</h3>

            <label className="checkout-payment">
              <input
                type="radio"
                name="payment"
                value="COD"
                checked={payment === "COD"}
                onChange={(e) => setPayment(e.target.value)}
              />
              <span>
                <strong>Cash on Delivery</strong>
                <small>Pay when your order arrives</small>
              </span>
            </label>

            <label className="checkout-payment">
              <input
                type="radio"
                name="payment"
                value="UPI"
                checked={payment === "UPI"}
                onChange={(e) => setPayment(e.target.value)}
              />
              <span>
                <strong>UPI</strong>
                <small>Demo option — no payment is processed</small>
              </span>
            </label>
          </section>
        </div>

        <aside className="checkout-card checkout-summary">
          <h3>🛍️ Order Summary</h3>

          <p>
            <span>Products</span>
            <span>{cart.reduce(
              (total, item) => total + item.quantity,
              0
            )} items</span>
          </p>

          <p>
            <span>Delivery</span>
            <span>Free</span>
          </p>

          <hr />

          <p className="checkout-total">
            <strong>Total</strong>
            <strong>
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
                maximumFractionDigits: 0,
              }).format(cartTotal)}
            </strong>
          </p>

          <button className="place-order-btn" type="submit">
            Place Order →
          </button>

          <p className="checkout-note">
            🔒 Demo checkout. No real payment is processed.
          </p>
        </aside>
      </form>
    </div>
  );
}
