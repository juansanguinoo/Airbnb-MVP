import React from 'react';

import HeaderHost from '../components/Host/HeaderHost';
import MainHost from '../components/Host/MainHost';
import MainHostReservations from '../components/Host/MainHostReservations';
import FooterDescriptionCards from '../components/Description/FooterDescriptionCards';

const Host = () => {
  return (
    <div>
      <HeaderHost />
      <MainHost />
      <MainHostReservations />
      <FooterDescriptionCards />
    </div>
  );
};

export default Host;
