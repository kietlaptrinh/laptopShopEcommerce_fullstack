import React from "react";
import { Navbar } from "../component/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../component/Home/Home";
import ShopDetails from "../component/Shop/ShopDetails";
import Cart from "../component/Cart/Cart";
import Profile from "../component/Profile/Profile";
import { Auth } from "../component/Auth/Auth";
import PaymentSuccess from "../component/PaymentSuccess/PaymentSuccess";

export const CustomerRouter = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account/:register" element={<Home />} />
        <Route path="/shop/:city/:title/:id" element={<ShopDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/my-profile/*" element={<Profile />} />
        <Route path="/payment/success/:id" element={<PaymentSuccess />} />
      </Routes>
      <Auth />
    </div>
  );
};
