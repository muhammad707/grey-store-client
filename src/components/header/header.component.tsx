import React from "react";
import {
  OptionLink,
  LogoContainer,
  HeaderContainer,
  OptionsContainer,
} from "./header.syles";
import CartIcon from "../cart-icon/cart-icon.component";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header: React.FC = () => (
  <HeaderContainer>
    <LogoContainer to={"/"}>
      <Logo className={"logo"} />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to={"/shop"}>SHOP</OptionLink>
      <OptionLink to={"/contact"}>CONTACT</OptionLink>
      <CartIcon />
    </OptionsContainer>
  </HeaderContainer>
);

export default Header;
