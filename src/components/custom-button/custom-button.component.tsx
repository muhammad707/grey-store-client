import React from "react";

import "./custom-button.styles.scss";

interface CustomButtonProps {
  children: React.ReactNode;
  isGoogleSignIn?: boolean;
  inverted: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={` ${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
