import React, { useEffect, useContext } from 'react';
import authContext from '../context/auth/authContext';

import HeaderHome from '../components/Home/HeaderHome';
import MainCards from '../components/Home/MainCards';
import FooterHome from '../components/Home/FooterHome';

const Home = () => {
  const AuthContext = useContext(authContext);
  const { authUser } = AuthContext;

  useEffect(() => {
    authUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <HeaderHome />
      <MainCards />
      <FooterHome />
    </div>
  );
};

export default Home;
