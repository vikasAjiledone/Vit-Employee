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

const ProposalView = () => {
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
              Proposal Overview
            </Typography>
            <Card sx={{ minWidth: 275, mt: 3 }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                  <Typography variant="h6">Project ID:</Typography>
                  <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                    121212
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                  <Typography variant="h6">Proejct Title :</Typography>
                  <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                    KKK121
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                  <Typography variant="h6">Project Description :</Typography>
                  <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                    27/11/2023
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                  <Typography variant="h6">Contact Person :</Typography>
                  <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                    27/11/2023
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                  <Typography variant="h6">Information for Bidding :</Typography>
                  <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                    27/11/2023
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                  <Typography variant="h6">Tender Notice :</Typography>
                  <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                    27/11/2023
                  </Typography>
                </Box>
              </CardContent>
              {/* <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions> */}
            </Card>
          </Box>
        </Box>
      );
}

export default ProposalView