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
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Layouts/Navbar';
import DarkModeContextProvider from './context/DarkMode';
import { TotalPriceProvider } from './context/TotalPriceContext';

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
    <Provider store={store}>
      {/* <Navbar/> */}
      <DarkModeContextProvider>
        <TotalPriceProvider>
            {element}
        </TotalPriceProvider>
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>
);
