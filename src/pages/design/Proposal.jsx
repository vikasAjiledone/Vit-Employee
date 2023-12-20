import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Sidebar from "../Sidebar";
import ProposalForm from "../../component/proposalData/ProposalForm";
import ProposalView from "../../component/proposalData/ProposalView";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Proposal = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography variant="h6">Proposal</Typography>
        <Box sx={{ display: "flex", alignItems: "center", my: 3 }}>
          <ProposalForm/>
        </Box>
        <Box>
          <ProposalView/>
        </Box>
      </Box>
    </Box>
  );
};

export default Proposal;
