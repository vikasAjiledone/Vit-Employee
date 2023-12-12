import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Sidebar from "../Sidebar";
import SafetyChecksForm from "../../component/safetychecks/SafetyChecksForm";
import SafetyCheckTable from "../../component/safetychecks/SafetyCheckTable";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const SafetyChecks = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography variant="h6">Safety Standard</Typography>
        <Box sx={{ display: "flex", alignItems: "center", my: 3 }}>
          <SafetyChecksForm/>
        </Box>
        <Box>
          <SafetyCheckTable/>
        </Box>
      </Box>
    </Box>
  )
}

export default SafetyChecks