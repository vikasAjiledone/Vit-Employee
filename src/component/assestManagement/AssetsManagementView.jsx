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

const AssetsManagementView = () => {
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
          Assets Management Overview
        </Typography>
        <Card sx={{ minWidth: 275, mt: 3 }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">Assets No :</Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                kkk123
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">Asset name :</Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                Vikas
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">Description :</Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officia reiciendis expedita odit.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">Location :</Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                pratapgarh
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">Vendor Name :</Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                pratapgarh
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">Vendor Contact No :</Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                pratapgarh
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">Vendor Email Id :</Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                pratapgarh
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">Warranty Expiry Date :</Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                pratapgarh
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">Condition :</Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                pratapgarh
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">End of Life :</Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                pratapgarh
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default AssetsManagementView;
