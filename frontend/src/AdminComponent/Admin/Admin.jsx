import React, { useEffect } from "react";
import AdminSideBar from "./AdminSideBar";
import { Route, Routes } from "react-router-dom";

import Orders from "../Orders/Orders";
import Menu from "../Menu/Menu";
import LaptopCategory from "../LaptopCategory/LaptopCategory";
import Specifications from "../Specifications/Specifications";
import Events from "../Events/Events";
import ShopDetails from "./ShopDetails";
import Dashboard, { ShopDashboard } from "../Dashboard/Dashboard";
import CreateMenuForm from "../Menu/CreateMenuForm";
import { useDispatch, useSelector } from "react-redux";
import {
  getShopById,
  getShopsCategory,
} from "../../component/State/Shop/Action";
import { getMenuItemsByShopId } from "../../component/State/Menu/Action";
import { fetchShopsOrder } from "../../component/State/Shop Order/Action";

export const Admin = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { shop } = useSelector((store) => store);
  // Function to handle sidebar close (currently empty)
  const handleClose = () => {};
  useEffect(() => {
    dispatch(getShopsCategory({ jwt, shopId: shop.usersShop?.id }));
    dispatch(
      fetchShopsOrder({
        jwt,
        shopId: shop.usersShop?.id,
      })
    );
  }, []);
  return (
    <div>
      <div className="lg:flex justify-between">
        <div>
          <AdminSideBar handleClose={handleClose} />
        </div>
        <div className="lg:w-[80%]">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/category" element={<LaptopCategory />} />
            <Route path="/specifications" element={<Specifications />} />
            <Route path="/event" element={<Events />} />
            <Route path="/details" element={<ShopDetails />} />
            <Route path="/add-menu" element={<CreateMenuForm />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
