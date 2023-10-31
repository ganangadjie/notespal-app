import React from 'react'
import { PrivateRoute } from './PrivateRoute';
import HomePage from '../pages/HomePage';
import { ProtectedRoute } from './ProtectedRoute';
import Unauthorized from '../pages/Unauthorized';
import { LoginPage } from '../pages/LoginPage';
import { Route, Routes } from 'react-router-dom';


export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<HomePage />}></Route>
        
      </Route>
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/LoginPage" element={<LoginPage />} />
      </Route>
      <Route path="/unauthorized" element={<Unauthorized />} />
    </Routes>
  );
}

