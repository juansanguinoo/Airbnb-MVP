import React from 'react';
import FooterPropertyName from '../components/HostName/FooterPropertyName';
import HeaderPropertyName from '../components/HostName/HeaderPropertyName';
import PropertyName from '../components/HostName/PropertyName';

const HostName = () => {
  return (
    <>
      <HeaderPropertyName />
      <PropertyName />
      <FooterPropertyName />
    </>
  );
};

export default HostName;
