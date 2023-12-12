import React from "react";
import Sidebar from "../../pages/Sidebar";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const CostEstimateView = () => {
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
            Cost Estimation Overview
            </Typography>
            <Card sx={{ minWidth: 275, mt: 3 }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                  <Typography variant="h6">Revenue Model :</Typography>
                  <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                    121212
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                  <Typography variant="h6">Total Project Cost :</Typography>
                  <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                    KKK121
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                  <Typography variant="h6">Maintenance Cost :</Typography>
                  <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                    27/11/2023
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                  <Typography variant="h6">BOQ :</Typography>
                  <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                    27/11/2023
                  </Typography>
                </Box>
                
              </CardContent>
             
            </Card>
          </Box>
        </Box>
      );
}

export default CostEstimateView