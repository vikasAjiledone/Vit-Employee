import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Sidebar from "../Sidebar";
import PostConstructionForm from "../../component/postConstructionData/PostConstructionForm";
import PostConstructionView from "../../component/postConstructionData/PostConstructionView";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const ProjectCompletionDocumentation = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography variant="h6">Project Completion Documentation</Typography>
        <Box sx={{ display: "flex", alignItems: "center", my: 3 }}>
          <PostConstructionForm/>
        </Box>
        <Box>
          <PostConstructionView/>
        </Box>
      </Box>
    </Box>
  );
}

export default ProjectCompletionDocumentation