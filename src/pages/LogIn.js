import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import authContext from '../context/auth/authContext';
import Login from '../components/LogIn/Login';

const LogIn = () => {
  const navigate = useNavigate();

  const AuthContext = useContext(authContext);
  const { authUser, user } = AuthContext;

  useEffect(() => {
    authUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (user) {
    navigate('/');
  }

  return (
    <div>
      <Login />
    </div>
  );
};

export default LogIn;
