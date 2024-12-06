import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateShopForm from "../AdminComponent/CreateShopForm/CreateShopForm";
import Admin from "../AdminComponent/Admin/Admin";
import { useSelector } from "react-redux";

export const AdminRoute = () => {
  const { shop } = useSelector((store) => store);
  return (
    <div>
      <Routes>
        <Route
          path="/*"
          //!shop.usersShop
          element={false ? <CreateShopForm /> : <Admin />}
        ></Route>
      </Routes>
    </div>
  );
};

export default AdminRoute;
