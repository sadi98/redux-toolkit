import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import NotFound from './pages/404.jsx';
import ProductsPage from './pages/products';
import ProfilePage from './pages/profile';
import DetailProductPage from './pages/detailProduct';

const element = (
  <Router>
    <Routes>
      <Route path="/" element={<div>Hello World</div> } />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/products" element={<ProductsPage/>} />
      <Route path="/profile" element={<ProfilePage/>} />
      <Route path="/product/:id" element={<DetailProductPage/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {element}
  </React.StrictMode>
);
