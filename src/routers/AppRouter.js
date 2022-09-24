import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from '../pages/LogIn';
import Register from '../pages/Register';
import DashboardRoutes from './DashboardRoutes';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<DashboardRoutes />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
