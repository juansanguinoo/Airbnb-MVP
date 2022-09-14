import React from "react";

import HeaderHome from "../components/Home/HeaderHome";
import MainMenu from "../components/Home/MainMenu";
import MainHomeCards from "../components/Home/MainHomeCards";
import FooterHome from "../components/Home/FooterHome";

const Home = () => {
  return (
    <div>
      <HeaderHome />
      <MainMenu />
      <MainHomeCards />
      <FooterHome />
    </div>
  );
};

export default Home;
