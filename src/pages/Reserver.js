import React, { useContext, useEffect } from 'react';
import Payment from '../components/Reserver/Payment';

import authContext from '../context/auth/authContext';
import hostContext from '../context/host/hostContext';

const Reserver = () => {
  const AuthContext = useContext(authContext);
  const { authUser } = AuthContext;

  const HostContext = useContext(hostContext);
  const { getHostById } = HostContext;

  useEffect(() => {
    authUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const lodging = localStorage.getItem('lodging');
    if (lodging) {
      getHostById(lodging);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Payment />;
};

export default Reserver;
