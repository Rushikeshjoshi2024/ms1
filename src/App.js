// import './App.css';
// import '../components/component.css';
import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Sellers from './pages/Sellers';
import Search from './pages/Search';
import Result from './pages/Result';
import Product_list from './pages/Product_list';
import Material_reg from './pages/Material_reg';
import Seller_login from './pages/Seller_login';
import Sellers_material from './pages/Sellers_material'
import Category from './pages/Category'
import Seller_registration from './pages/Seller_registration';
import { Route, Routes } from 'react-router-dom';  // Use Routes instead of Switch (React Router v6)

import Seller_account from './pages/Seller_account';
import Seller_details from './pages/Seller_details';
import Contact_us from './pages/Contact_us';
import About_us from './pages/About_us';
import User_account from './pages/User_account';
import Material_details from './pages/Material_details';
import Category_material from './pages/Category_material';
import Sellers_home_scr from './components/Sellers_home_scr';
import OAuthCallback from './components/OAuthCallback';

function App() {


  return (
    <div>
      <>
        {/* This is the alias of BrowserRouter i.e. Router */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Contact" element={<Contact_us />} />
          <Route exact path="/About" element={<About_us />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/Categories" element={<Category />} />
          <Route exact path="/User_account" element={<User_account />} />
          <Route exact path="/Material_details/:id" element={<Material_details />} />
          <Route exact path="/ForgotPassword" element={<ForgotPassword />} />
          <Route exact path="/Sellers" element={<Sellers />} />
          {/* <Route exact path="/SellersHome" element={<Sellers_home_scr />} /> */}
          <Route exact path="/Products" element={<Product_list />} />
          <Route exact path="/Search" element={<Search />} />
          <Route exact path="/Result" element={<Result />} />
          <Route exact path="/Category_material/:category" element={<Category_material />} />
          <Route exact path="/Seller_login" element={<Seller_login />} />
          <Route exact path="/Sellers_material/:seller_id" element={<Sellers_material />} />
          <Route exact path="/Seller_registration" element={<Seller_registration />} />
          <Route exact path="/Seller_details/:seller_id" element={<Seller_details />} />
          <Route exact path="/Seller_account" element={<Seller_account />} />
          <Route exact path="/Material_reg" element={<Material_reg />} />
          <Route path="/oauth/callback" element={<OAuthCallback />} />

        </Routes>

        {/* <Home /> */}
      </>

    </div>
  );
}

export default App;