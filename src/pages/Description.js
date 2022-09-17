import React from 'react';

import HeaderDescription from '../components/Description/HeaderDescription';
import MainDescriptionCards from '../components/Description/MainDescriptionCards';
import FooterDescriptionCards from '../components/Description/FooterDescriptionCards';

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
