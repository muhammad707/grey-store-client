import React from "react";
import { CartIconContainer, ItemCountContainer } from "./cart-icon.styles";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon: React.FC = () => (
  <CartIconContainer>
    <ShoppingIcon
      className={"shopping-icon"}
      style={{ height: 24, width: 24 }}
    />
    <ItemCountContainer>0</ItemCountContainer>
  </CartIconContainer>
);

export default CartIcon;
