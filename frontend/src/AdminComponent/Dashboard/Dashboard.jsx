import React from "react";

import { Grid } from "@mui/material";
import MenuTable from "../Menu/MenuTable";
import OrderTable from "../Orders/OrderTable";

export const ShopDashboard = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <MenuTable />
        </Grid>
        <Grid item xs={12} lg={6}>
          <OrderTable />
        </Grid>
      </Grid>
    </div>
  );
};

export default ShopDashboard;
