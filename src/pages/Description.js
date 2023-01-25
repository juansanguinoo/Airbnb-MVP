import React, { useEffect, useContext } from 'react';
import authContext from '../context/auth/authContext';

import HeaderDescription from '../components/Description/HeaderDescription';
import MainDescriptionCards from '../components/Description/MainDescriptionCards';
import FooterDescriptionCards from '../components/Description/FooterDescriptionCards';

const Description = () => {
  const AuthContext = useContext(authContext);
  const { authUser } = AuthContext;

  useEffect(() => {
    authUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <HeaderDescription />
      <MainDescriptionCards />
      <FooterDescriptionCards />
    </div>
  );
};

export default Description;
