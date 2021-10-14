import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/Checkout/CheckoutItem";
import StripeCheckoutButton from "../../components/stripe-button/StripeCheckoutButton";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import "./checkoutPage.styles.scss";
const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>Total: ${total}</span>
      </div>
      <div>
        <p className="test-warning">
          {" "}
          ** Please use the following test payment ** do not use a real credit
          card <br />
          4242 4242 4242 4242 <br />
          EXP: 01/22 <br />
          CVV: 123{" "}
        </p>
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
