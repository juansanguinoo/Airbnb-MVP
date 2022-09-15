import React from "react";
import FooterDescriptionCards from "../components/Description/FooterDescriptionCards";

import HeaderDescription from "../components/Description/HeaderDescription";
import MainDescriptionCards from "../components/Description/MainDescriptionCards";

const Description = () => {
  return (
    <div>
      <HeaderDescription />
      <MainDescriptionCards />
      <FooterDescriptionCards />
    </div>
  );
};

export default Description;
