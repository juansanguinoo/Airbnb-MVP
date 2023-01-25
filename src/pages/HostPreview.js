import React from 'react';
import FooterPreview from '../components/HostPreview/FooterPreview';
import HeaderPropertyPreview from '../components/HostPreview/HeaderPropertyPreview';
import PropertyPreview from '../components/HostPreview/PropertyPreview';

const HostPreview = () => {
  return (
    <>
      <HeaderPropertyPreview />
      <PropertyPreview />
      <FooterPreview />
    </>
  );
};

export default HostPreview;
