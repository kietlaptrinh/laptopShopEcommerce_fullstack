import { Grid } from "@mui/material";
import React from "react";
import SpecificationTable from "./SpecificationTable";
import SpecificationCategoryTable from "./SpecificationCategoryTable";

export const Specifications = () => {
  return (
    <div className="px-2">
      <Grid container spacing={2}>
        <Grid item xs={12} lg={8}>
          <SpecificationTable />
        </Grid>
        <Grid item xs={12} lg={4}>
          <SpecificationCategoryTable />
        </Grid>
      </Grid>
    </div>
  );
};

export default Specifications;
