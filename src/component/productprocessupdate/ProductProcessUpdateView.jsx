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

const ProductProcessUpdateView = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: "whitesmoke" }}
      >
        <DrawerHeader />
        <Typography variant="h6" sx={{ textDecoration: "underline" }}>
          Project process Update Overview
        </Typography>
        <Card sx={{ minWidth: 275, mt: 3 }}>
          <CardContent>
            <Box
              sx={{
                my: 2,
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={{ my: 1, textDecoration: "underline" }}
                >
                  Work Order
                </Typography>
                <Box >
                  <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                    <Typography variant="h6">Document:</Typography>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      sx={{ pl: 1 }}
                    >
                      Vikas Pandey
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                    <Typography variant="h6">Date:</Typography>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      sx={{ pl: 1 }}
                    >
                      27/11/2023
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ my: 3, textDecoration: "underline" }}
                >
                  Weekly Reports
                </Typography>
                <Box>
                  <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                    <Typography variant="h6">Name:</Typography>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      sx={{ pl: 1 }}
                    >
                      Vikas Pandey
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                    <Typography variant="h6">Status of Completion:</Typography>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      sx={{ pl: 1 }}
                    >
                      Yes
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ my: 3, textDecoration: "underline" }}
                >
                  Percentage Completion
                </Typography>
                <Box>
                  <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                    <Typography variant="h6">Name:</Typography>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      sx={{ pl: 1 }}
                    >
                      Vikas Pandey
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                    <Typography variant="h6">Status of Completion:</Typography>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      sx={{ pl: 1 }}
                    >
                      Yes
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ my: 3, textDecoration: "underline" }}
                >
                  Payments
                </Typography>
                <Box>
                  <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                    <Typography variant="h6">Date:</Typography>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      sx={{ pl: 1 }}
                    >
                      27/12/2023
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                    <Typography variant="h6">Payment Amount:</Typography>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      sx={{ pl: 1 }}
                    >
                      10000
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default ProductProcessUpdateView;
