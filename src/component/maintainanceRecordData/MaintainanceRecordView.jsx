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

const MaintainanceRecordView = () => {
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
            Maintainance Record Overview
            </Typography>
            <Card sx={{ minWidth: 275, mt: 3 }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                  <Typography variant="h6">Asset No :</Typography>
                  <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                    121212
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                  <Typography variant="h6">Asset name :</Typography>
                  <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                    KKK121
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                  <Typography variant="h6">Maintenance Date :</Typography>
                  <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                    KKK121
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                  <Typography variant="h6">Maintenance Performed :</Typography>
                  <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                    KKK121
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                  <Typography variant="h6">Miscellaneous Info :</Typography>
                  <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                    KKK121
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      );
}

export default MaintainanceRecordView