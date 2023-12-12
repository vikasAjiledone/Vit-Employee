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

const TechnicalSpecificationView = () => {
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
              <Typography variant="h6">
                Basic Guidelines for Contractor :
              </Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                explicabo. Aspernatur labore beatae porro incidunt cumque natus
                unde quam omnis consequatur obcaecati.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">Noise :</Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                explicabo. Aspernatur labore beatae porro incidunt cumque natus
                unde quam omnis consequatur obcaecati.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">Embarkment Construction :</Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                explicabo. Aspernatur labore beatae porro incidunt cumque natus
                unde quam omnis consequatur obcaecati.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">
                Soil Erosion and Sedimentation Control :
              </Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                explicabo. Aspernatur labore beatae porro incidunt cumque natus
                unde quam omnis consequatur obcaecati.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">Road safety :</Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                explicabo. Aspernatur labore beatae porro incidunt cumque natus
                unde quam omnis consequatur obcaecati.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">
                Sanitation & Waste Disposal :
              </Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                explicabo. Aspernatur labore beatae porro incidunt cumque natus
                unde quam omnis consequatur obcaecati.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">Safety Guidelines :</Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                explicabo. Aspernatur labore beatae porro incidunt cumque natus
                unde quam omnis consequatur obcaecati.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">Environmental Screening :</Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                explicabo. Aspernatur labore beatae porro incidunt cumque natus
                unde quam omnis consequatur obcaecati.
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{ my: 3, textDecoration: "underline" }}
            >
              Technical Specifications
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">Introductions :</Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                explicabo. Aspernatur labore beatae porro incidunt cumque natus
                unde quam omnis consequatur obcaecati.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">Provisions adhered to MoRTH Specifications :</Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                explicabo. Aspernatur labore beatae porro incidunt cumque natus
                unde quam omnis consequatur obcaecati.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">Contract Drawings :</Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                explicabo. Aspernatur labore beatae porro incidunt cumque natus
                unde quam omnis consequatur obcaecati.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">Site information :</Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                explicabo. Aspernatur labore beatae porro incidunt cumque natus
                unde quam omnis consequatur obcaecati.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">Public Utilities :</Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                explicabo. Aspernatur labore beatae porro incidunt cumque natus
                unde quam omnis consequatur obcaecati.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">Traffic Plan during construction :</Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                explicabo. Aspernatur labore beatae porro incidunt cumque natus
                unde quam omnis consequatur obcaecati.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">Item rates of work :</Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                explicabo. Aspernatur labore beatae porro incidunt cumque natus
                unde quam omnis consequatur obcaecati.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">Methodology and sequence and work :</Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                explicabo. Aspernatur labore beatae porro incidunt cumque natus
                unde quam omnis consequatur obcaecati.
              </Typography>
            </Box>
          </CardContent>
          
        </Card>
      </Box>
    </Box>
  );
};

export default TechnicalSpecificationView;
