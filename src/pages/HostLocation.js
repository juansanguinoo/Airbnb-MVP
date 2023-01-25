import React from 'react';
import FooterPropertyLocation from '../components/HostLocation/FooterPropertyLocation';
import HeaderPropertyLocation from '../components/HostLocation/HeaderPropertyLocation';
import PropertyLocation from '../components/HostLocation/PropertyLocation';

const HostLocation = () => {
  return (
    <>
      <HeaderPropertyLocation />
      <PropertyLocation />
      <FooterPropertyLocation />
    </>
  );
};

export default HostLocation;
