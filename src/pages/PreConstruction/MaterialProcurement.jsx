import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Sidebar from "../Sidebar";
import MaterialProcurementForm from "../../component/materialProcurement/MaterialProcurementForm";
import MaterialProcurementView from "../../component/materialProcurement/MaterialProcurementView";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const MaterialProcurement = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography>Material Procurement</Typography>
        <Box>
          <MaterialProcurementForm/>
        </Box>
        <Box>
          <MaterialProcurementView/>
        </Box>
      </Box>
    </Box>
  );
}

export default MaterialProcurement