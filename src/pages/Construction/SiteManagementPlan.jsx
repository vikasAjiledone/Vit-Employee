import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Sidebar from "../Sidebar";
import SiteManagementPlanForm from "../../component/SiteManagementPlan/SiteManagementPlanForm";
import SiteManagementPlanTable from "../../component/SiteManagementPlan/SiteManagementPlanTable";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const SiteManagementPlan = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography variant="h6">Site Management Plan</Typography>

        <Box sx={{ display: "flex", alignItems: "center", my: 3 }}>
          <SiteManagementPlanForm />
        </Box>
        <Box>
          <SiteManagementPlanTable/>
        </Box>
      </Box>
    </Box>
  );
};

export default SiteManagementPlan;
