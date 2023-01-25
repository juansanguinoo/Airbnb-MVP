import React from 'react';
import FooterPropertyPrivacy from '../components/HostPrivacy/FooterPropertyPrivacy';
import HeaderPropertyPrivacy from '../components/HostPrivacy/HeaderPropertyPrivacy';
import PropertyPrivacy from '../components/HostPrivacy/PropertyPrivacy';

const HostPrivacy = () => {
  return (
    <>
      <HeaderPropertyPrivacy />
      <PropertyPrivacy />
      <FooterPropertyPrivacy />
    </>
  );
};

export default HostPrivacy;
