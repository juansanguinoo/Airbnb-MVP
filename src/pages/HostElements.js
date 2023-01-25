import React from 'react';
import FooterPropertyElements from '../components/HostElements/FooterPropertyElements';
import HeaderPropertyElements from '../components/HostElements/HeaderPropertyElements';
import PropertyElements from '../components/HostElements/PropertyElements';

const HostElements = () => {
  return (
    <>
      <HeaderPropertyElements />
      <PropertyElements />
      <FooterPropertyElements />
    </>
  );
};

export default HostElements;
