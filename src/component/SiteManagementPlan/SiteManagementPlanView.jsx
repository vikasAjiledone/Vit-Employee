import React from "react";
import Sidebar from "../../pages/Sidebar";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const SiteManagementPlanView = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "whitesmoke",
          height: "100vh",
        }}
      >
        <DrawerHeader />
        <Typography variant="h6" sx={{ textDecoration: "underline" }}>
          Site Management Plan Overview
        </Typography>
        <Card sx={{ minWidth: 275, mt: 3 }}>
          <CardContent>
            <Typography variant="h6" sx={{ textDecoration: "underline" }}>
              Administrative Employee Details
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">Name :</Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                Vikas Pandey
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">Company Name:</Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                Google
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">Role / Position:</Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                KKK121
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">Contact Detail :</Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                KKK121
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">Email :</Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                KKK121
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">Other responsibilities :</Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                KKK121
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">Schedules :</Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                KKK121
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">Site Management Layout :</Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                KKK121
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default SiteManagementPlanView;
