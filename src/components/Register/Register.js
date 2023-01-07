import React from 'react';
import '../../assets/styles/RegisterStyles/Register.css';

import { useFormik } from 'formik';
import * as Yup from 'yup';

const Register = () => {
  
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(8, 'Must be at least 8 characters')
        .required('Password is required')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })
  

  return (
    <div className="register__form__container">
      <div className="register__form">
        <h1>Register</h1>
        <form
          onSubmit={formik.handleSubmit}
        >
          <div className="register__user">
            <input
              type="text"
              name="username"
              id="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {
              formik.touched.username && formik.errors.username ?
              <div className='error__register'>
                <p>{formik.errors.username}</p>
              </div>
              : null
            }
            <label>Username</label>
          </div>
          <div className="register__user">
            <input
              type="text"
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {
              formik.touched.email && formik.errors.email ?
              <div className='error__register'>
                <p>{formik.errors.email}</p>
              </div>
              : null
            }
            <label>Email</label>
          </div>
          <div className="register__user">
            <input
              type="password"
              name="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {
              formik.touched.password && formik.errors.password ?
              <div className='error__register'>
                <p>{formik.errors.password}</p>
              </div>
              : null
            }
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
