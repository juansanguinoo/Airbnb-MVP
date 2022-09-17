import React from 'react';
import '../../assets/styles/RegisterStyles/Register.css';

const Register = () => {
  return (
    <div className="register__form__container">
      <div className="register__form">
        <h1>Register</h1>
        <form method="post">
          <div className="register__user">
            <input type="text" required></input>
            <label>Username</label>
          </div>
          <div className="register__user">
            <input type="text" required></input>
            <label>Email</label>
          </div>
          <div className="register__user">
            <input type="password" required></input>
            <label>Password</label>
          </div>
          <div className="register__user__button">
            <input type="submit" value="Register"></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
