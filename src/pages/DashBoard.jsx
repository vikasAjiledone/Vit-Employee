import React from "react";
import Sidebar from "./Sidebar";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DashBoardOverview from "./DashBoardOverview";
import ProjectEstablishmentView from "../component/ProjectEstablishment/ProjectEstablishmentView";
import StandardForm from "./planning/StandardForm";
import FinancialSpecificationView from "../component/financialSpecification/FinancialSpecificationView";
import LabTestingView from "../component/labTesting/LabTestingView";
import ProposalView from "../component/proposalData/ProposalView";
import TechnicalSpecificationView from "../component/technicalSpecificationData/TechnicalSpecificationView";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const DashBoard = () => {
  return (
    <Box sx={{ ml: -3 }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <Box>
          <ProjectEstablishmentView />
        </Box>
        <Box>
          <StandardForm />
        </Box>
        <Box>
          <FinancialSpecificationView />
        </Box>
        <Box>
          <LabTestingView />
        </Box>
        <Box>
          <ProposalView />
        </Box>
        <Box>
          <TechnicalSpecificationView />
        </Box>
      </Box>
    </Box>
  );
};

export default DashBoard;
