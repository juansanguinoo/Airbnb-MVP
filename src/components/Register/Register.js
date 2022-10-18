import React from 'react';
import useForm from '../../hooks/useForm';
import '../../assets/styles/RegisterStyles/Register.css';

const Register = () => {
  const [form, handleChange] = useForm({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
  }

  return (
    <div className="register__form__container">
      <div className="register__form">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="register__user">
            <input
              type="text"
              name="username"
              id="username"
              required
              onChange={handleChange}></input>
            <label>Username</label>
          </div>
          <div className="register__user">
            <input
              type="text"
              name="email"
              id="email"
              required
              onChange={handleChange}></input>
            <label>Email</label>
          </div>
          <div className="register__user">
            <input
              type="password"
              name="password"
              id="password"
              required
              onChange={handleChange}></input>
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
