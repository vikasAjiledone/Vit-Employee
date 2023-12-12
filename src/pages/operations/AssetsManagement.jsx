import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Sidebar from "../Sidebar";
import AssestManagementForm from "../../component/assestManagement/AssestManagementForm";
import AssetsManagementTable from '../../component/assestManagement/AssetManagementTable'

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AssetsManagement = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography variant="h6">Assets Management</Typography>
        <Box sx={{ display: "flex", alignItems: "center", my: 3 }}>
            <AssestManagementForm/>
        </Box>
        <Box>
          <AssetsManagementTable/>
        </Box>
      </Box>
    </Box>
  );
}

export default AssetsManagement