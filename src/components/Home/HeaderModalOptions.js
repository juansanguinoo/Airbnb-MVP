import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import '../../assets/styles/HomeStyles/HeaderModalOptions.css';

import authContext from '../../context/auth/authContext';
import hostContext from '../../context/host/hostContext';

const HeaderModalOptions = () => {
  const AuthContext = useContext(authContext);
  const { user, logout } = AuthContext;

  const HostContext = useContext(hostContext);
  const { clearData } = HostContext;

  const handleClick = () => {
    logout();
    clearData();
  };

  return (
    <div className="modal__options">
      <div className="modal__container">
        {user ? (
          <>
            <div className="item-modal">
              <button onClick={handleClick}>Logout</button>
            </div>
            <div className="item-modal">
              <Link to="/my-shopping">
                <button>My Shopping</button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="item-modal">
              <Link to="/login">
                <button>Login</button>
              </Link>
            </div>
            <div className="item-modal">
              <Link to="/register">
                <button>Register</button>
              </Link>
            </div>
          </>
        )}
        <div className="item-modal">
          <Link to="/become-host">
            <button>Become a host</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderModalOptions;
