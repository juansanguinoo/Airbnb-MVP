import React from 'react';
import FooterPropertyPhotos from '../components/HostPhotos/FooterPropertyPhotos';
import HeaderPropertyPhotos from '../components/HostPhotos/HeaderPropertyPhotos';
import PropertyPhotos from '../components/HostPhotos/PropertyPhotos';

const HostPhotos = () => {
  return (
    <>
      <HeaderPropertyPhotos />
      <PropertyPhotos />
      <FooterPropertyPhotos />
    </>
  );
};

export default HostPhotos;
