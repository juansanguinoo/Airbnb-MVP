import React from 'react';
import '../../assets/styles/LogInStyles/Login.css';

const Login = () => {
  return (
    <div className="login__form__container">
      <div className="login__form">
        <h1>Log in</h1>
        <form method="post">
          <div className="username__password">
            <input type="text" required></input>
            <label>Username</label>
          </div>
          <div className="username__password">
            <input type="password" required></input>
            <label>Password</label>
          </div>
          <div className="password__restart">Forgot your password?</div>
          <input type="submit" value="Login"></input>
          <div className="login__register">
            Don't have an account? <a href="/register">Register</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
