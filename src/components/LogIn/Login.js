import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/LogInStyles/Login.css';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import authContext from '../../context/auth/authContext';
import Alert from '../Alert/Alert';

const Login = () => {
  const AuthContext = useContext(authContext);
  const { message, authenticated, login } = AuthContext;

  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticated]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (data) => {
      login(data);
    },
  });

  return (
    <div className="login__form__container">
      <div className="login__form">
        <h1>Log in</h1>
        {message ? <Alert /> : null}
        <form onSubmit={formik.handleSubmit}>
          <div className="login__user">
            <input
              type="text"
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error__login">
                <p>{formik.errors.email}</p>
              </div>
            ) : null}
            <label>Email</label>
          </div>
          <div className="login__user">
            <input
              type="password"
              name="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error__login">
                <p>{formik.errors.password}</p>
              </div>
            ) : null}
            <label>Password</label>
          </div>
          <div className="password__restart">Forgot your password?</div>
          <div className="login__button">
            <input type="submit" value="Login"></input>
          </div>
          <div className="login__register">
            Don't have an account? <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
