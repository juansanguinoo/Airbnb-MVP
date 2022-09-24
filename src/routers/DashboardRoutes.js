import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Description from '../pages/Description';
import Home from '../pages/Home';

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/home/category" element={<Home />} />
      <Route path="/description-host" element={<Description />} />

      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default DashboardRoutes;
