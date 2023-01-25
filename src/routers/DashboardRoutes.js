import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Description from '../pages/Description';
import Home from '../pages/Home';
import HostElements from '../pages/HostElements';
import HostLocation from '../pages/HostLocation';
import HostName from '../pages/HostName';
import HostPhotos from '../pages/HostPhotos';
import HostPrivacy from '../pages/HostPrivacy';
import HostType from '../pages/HostType';

import authToken from '../config/authToken';
import HostPreview from '../pages/HostPreview';
import Shopping from '../pages/Shopping';
import Reserver from '../pages/Reserver';

const token = localStorage.getItem('token');
if (token) {
  authToken(token);
}

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/home/category" element={<Home />} />
      <Route path="/description-host" element={<Description />} />
      <Route path="/payment" element={<Reserver />} />

      <Route path="/" element={<Home />} />

      <Route
        path="/my-shopping"
        element={<PrivateRoute children={<Shopping />}></PrivateRoute>}
      />
      <Route
        path="/become-host"
        element={<PrivateRoute children={<HostType />}></PrivateRoute>}
      />
      <Route
        path="/become-host/privacy-type"
        element={<PrivateRoute children={<HostPrivacy />}></PrivateRoute>}
      />
      <Route
        path="/become-host/location"
        element={<PrivateRoute children={<HostLocation />}></PrivateRoute>}
      />
      <Route
        path="/become-host/floor-plan"
        element={<PrivateRoute children={<HostElements />}></PrivateRoute>}
      />
      <Route
        path="/become-host/photos"
        element={<PrivateRoute children={<HostPhotos />}></PrivateRoute>}
      />
      <Route
        path="/become-host/title"
        element={<PrivateRoute children={<HostName />}></PrivateRoute>}
      />
      <Route
        path="/become-host/preview"
        element={<PrivateRoute children={<HostPreview />}></PrivateRoute>}
      />
    </Routes>
  );
};

export default DashboardRoutes;
