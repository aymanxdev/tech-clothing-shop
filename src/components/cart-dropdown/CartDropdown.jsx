import React from "react";
import "./cartDropdown.styles.scss";
import CustomButton from "../form-button/CustomButton";
import { connect } from "react-redux";
import CartItem from "../cart-item/CartItem";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
const CartDropdown = ({ cartItems, history }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>

      <CustomButton onClick={() => history.push("/checkout")}>
        Go To Checkout
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
