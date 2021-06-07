import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles";
import React from "react";

const Spinner: React.FC = () => (
  <SpinnerOverlay>
    <SpinnerContainer />
  </SpinnerOverlay>
);
export default Spinner;
