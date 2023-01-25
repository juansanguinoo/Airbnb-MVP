import React, { useContext, useEffect, useState } from 'react';

import '../../assets/styles/HostLocationStyles/PropertyLocation.css';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import hostContext from '../../context/host/hostContext';

import ClipLoader from 'react-spinners/ClipLoader';

const PropertyLocation = () => {
  const [loading, setLoading] = useState(false);

  const HostContext = useContext(hostContext);
  const { selectLocation } = HostContext;

  const formik = useFormik({
    initialValues: {
      street: '',
      typeHouse: '',
      city: '',
      state: '',
      country: '',
    },
    validationSchema: Yup.object({
      street: Yup.string().required('Street is required'),
      typeHouse: Yup.string().required('Type of house is required'),
      city: Yup.string().required('City is required'),
      state: Yup.string().required('State is required'),
      country: Yup.string().required('Country is required'),
    }),
    onSubmit: (data) => {
      selectLocation(data);
    },
  });

  useEffect(() => {
    const localLocation = JSON.parse(localStorage.getItem('host'));
    if (localLocation.location) {
      formik.setValues({ ...localLocation.location });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="propertylocation__container">
      <div className="propertylocation__title">
        <h1>Where is your property located?</h1>
      </div>
      <div className="propertylocation__form">
        <div className="form__container">
          <form onSubmit={formik.handleSubmit}>
            <div className="location__input">
              <input
                type="text"
                name="street"
                placeholder="Street"
                value={formik.values.street}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.street && formik.errors.street ? (
              <div className="input__error">
                <p>{formik.errors.street}</p>
              </div>
            ) : null}
            <div className="location__input">
              <input
                type="text"
                name="typeHouse"
                placeholder="Apt, suite, etc."
                value={formik.values.typeHouse}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.typeHouse && formik.errors.typeHouse ? (
              <div className="input__error">
                <p>{formik.errors.typeHouse}</p>
              </div>
            ) : null}
            <div className="location__input">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.city && formik.errors.city ? (
              <div className="input__error">
                <p>{formik.errors.city}</p>
              </div>
            ) : null}
            <div className="location__input">
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formik.values.state}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.state && formik.errors.state ? (
              <div className="input__error">
                <p>{formik.errors.state}</p>
              </div>
            ) : null}
            <div className="location__input">
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.country && formik.errors.country ? (
              <div className="input__error">
                <p>{formik.errors.country}</p>
              </div>
            ) : null}
            <div className="location__input">
              <input type="submit" value="Validate" onClick={handleClick} />
            </div>
            {loading ? (
              <div className="loading__container">
                <ClipLoader color={'#123abc'} loading={loading} size={150} />
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyLocation;
