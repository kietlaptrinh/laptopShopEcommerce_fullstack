import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminRoute from "./AdminRoute";
import { CustomerRouter } from "./CustomerRouter";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/admin/shops/*" element={<AdminRoute />}></Route>
        <Route path="/*" element={<CustomerRouter />}></Route>
      </Routes>
    </div>
  );
};

export default Routers;
