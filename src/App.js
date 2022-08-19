import './App.css';
import React, { useState } from "react";
import Home from './pages/home/home';
import { Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Contact from './pages/Contact/Contact';
import Cart from './pages/cart/cart';
import Header from './components/header/header';
import UsersLog from './pages/usersLog/UsersLog';
import ProductList from './components/productList/productList';


function App() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="container">
      <div className="header">
        <Header onSearch={setSearchValue} />
      </div>
        <div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<ProductList searchValue={searchValue}/>} />
					  <Route path="/about" element={<About/>} />
					  <Route path="/cart" element={<Cart/>} />
					  <Route path="/contact" element={<Contact/>} />
					  <Route path="/login" element={<UsersLog/>} />
					</Routes>
        </div>
      
    </div>
  );
}

export default App;
