import React from "react";
import { connect } from "react-redux";
import { clearCartItem } from "../../redux/cart/cartActions";
import "./checkoutItem.styles.scss";

const CheckoutItem = ({ cartItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="price">{price}</span>
      <span className="quantity">{quantity}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearCartItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
