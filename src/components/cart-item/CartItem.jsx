import React from "react";
import {
  CartItemContainerStyles,
  ItemDetailsStyles,
  NameStyles,
} from "./CartItem.styles";
import "./cartItem.styles.scss";
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainerStyles>
      <img src={imageUrl} alt={name} />
      <ItemDetailsStyles>
        <NameStyles>{name}</NameStyles>
        <span className="price">
          {quantity} x £{price}
        </span>
      </ItemDetailsStyles>
    </CartItemContainerStyles>
  );
};

export default CartItem;
