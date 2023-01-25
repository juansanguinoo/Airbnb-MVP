import React from 'react';
import FooterKindProperty from '../components/HostType/FooterKindProperty';
import HeaderKindProperty from '../components/HostType/HeaderKindProperty';
import KindProperty from '../components/HostType/KindProperty';

const HostType = () => {
  return (
    <>
      <HeaderKindProperty />
      <KindProperty />
      <FooterKindProperty />
    </>
  );
};

export default HostType;
