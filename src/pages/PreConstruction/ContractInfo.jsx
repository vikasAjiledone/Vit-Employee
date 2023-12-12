import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Sidebar from "../Sidebar";
import ContactInfoForm from "../../component/contactInfoData/ContactInfoForm";
import ContractFormTable from "../../component/contactInfoData/ContractFormTable";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const ContractInfo = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography variant="h6">Contract Info</Typography>
        <Box sx={{ display: "flex", alignItems: "center", my: 3 }}>
          <ContactInfoForm/>
        </Box>
        <Box>
          <ContractFormTable/>
        </Box>
      </Box>
    </Box>
  );
}

export default ContractInfo