import React from 'react';
import useForm from '../../hooks/useForm';
import '../../assets/styles/LogInStyles/Login.css';

const Login = () => {
  const [form, handleChange] = useForm({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="login__form__container">
      <div className="login__form">
        <h1>Log in</h1>
        <form onSubmit={handleSubmit}>
          <div className="login__user">
            <input
              type="text"
              name="username"
              id="username"
              required
              onChange={handleChange}></input>
            <label>Username</label>
          </div>
          <div className="login__user">
            <input
              type="password"
              name="password"
              id="password"
              required
              onChange={handleChange}></input>
            <label>Password</label>
          </div>
          <div className="password__restart">Forgot your password?</div>
          <div className="login__button">
            <input type="submit" value="Login"></input>
          </div>
          <div className="login__register">
            Don't have an account? <a href="/register">Register</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
