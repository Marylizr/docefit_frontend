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
import AddProduct from './pages/addProduct/AddProduct';
import SecuredContent from './pages/securedContent/securedContent';
import AdminUsers from './pages/adminUsers/adminUsers';


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
            <Route path="/addProduct" element={<AddProduct/>} />
            <Route path="/adminUsers" element={<AdminUsers/>} />
            <Route path="/securedcontent/*" element={<SecuredContent />} />
					</Routes>
        </div>
      
    </div>
  );
}

export default App;
