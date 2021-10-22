import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cartActions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import "./cartIcon.styles.scss";
import { createStructuredSelector } from "reselect";
import { ItemCountContainer, ShoppingIconContainer } from "./CartIcon.styles";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <ShoppingIconContainer onClick={toggleCartHidden}>
      <ShoppingIconContainer />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </ShoppingIconContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
