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

const ContractorInfoView = () => {
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
            Contractor Information Overview
            </Typography>
            <Card sx={{ minWidth: 275, mt: 3 }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                  <Typography variant="h6">Name :</Typography>
                  <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                    Vikas Pandey
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                  <Typography variant="h6">Organization :</Typography>
                  <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                    Google
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                  <Typography variant="h6">Address :</Typography>
                  <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                    Noida, Up
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                  <Typography variant="h6">Contact No. :</Typography>
                  <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                    7080901000
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                  <Typography variant="h6">Email :</Typography>
                  <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                    vikas@gmail.com
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                  <Typography variant="h6">Fax :</Typography>
                  <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                    Kjjdsk
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                  <Typography variant="h6">Key dates and Contact period :</Typography>
                  <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                    27/11/2023
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                  <Typography variant="h6">Contract Award Date :</Typography>
                  <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                    27/11/2023
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                  <Typography variant="h6">Sub-Contractor Detail :</Typography>
                  <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                    27/11/2023
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                  <Typography variant="h6">Construction Contract Agreement :</Typography>
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

export default ContractorInfoView