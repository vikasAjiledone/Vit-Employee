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

const ProjectEstablishmentView = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: "whitesmoke" }}
      >
        <DrawerHeader />
        <Typography variant="h6" sx={{ textDecoration: "underline" }}>
          Project Establishment Overview
        </Typography>
        <Card sx={{ minWidth: 275, mt: 3 }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">Project ID :</Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                121212
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">Project Title :</Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                KKK121
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Typography variant="h6">Entry Date :</Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                27/11/2023
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                my: 5,
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={{ my: 3, textDecoration: "underline" }}
                >
                  Client Information
                </Typography>
                <Box sx={{}}>
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
                    <Typography variant="h6">Organization:</Typography>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      sx={{ pl: 1 }}
                    >
                      XYZ
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                    <Typography variant="h6">Address:</Typography>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      sx={{ pl: 1 }}
                    >
                      Vivek nagar, pratapgarh, uttarpradesh
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                    <Typography variant="h6">Contact No.:</Typography>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      sx={{ pl: 1 }}
                    >
                      8882128570
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                    <Typography variant="h6">Email:</Typography>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      sx={{ pl: 1 }}
                    >
                      pandeyvikas224705@gmail.com
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                    <Typography variant="h6">Fax:</Typography>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      sx={{ pl: 1 }}
                    >
                      Fax1234
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                  <Typography variant="h6">Initial Budget:</Typography>
                  <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                    45000
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ my: 3, textDecoration: "underline" }}
                >
                  Sponser Details
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
                    <Typography variant="h6">Organization:</Typography>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      sx={{ pl: 1 }}
                    >
                      XYZ
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                    <Typography variant="h6">Address:</Typography>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      sx={{ pl: 1 }}
                    >
                      Vivek nagar, pratapgarh, uttarpradesh
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                    <Typography variant="h6">Contact No.:</Typography>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      sx={{ pl: 1 }}
                    >
                      8882128570
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                    <Typography variant="h6">Email:</Typography>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      sx={{ pl: 1 }}
                    >
                      pandeyvikas224705@gmail.com
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                    <Typography variant="h6">Fax:</Typography>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      sx={{ pl: 1 }}
                    >
                      Fax1234
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={{ my: 3 }}>
              <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                Project Overview:
              </Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                aliquid voluptatibus illo, rem praesentium illum pariatur
                laboriosam eveniet quisquam similique rerum aliquam!
              </Typography>
            </Box>
            <Box sx={{ my: 3 }}>
              <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                Project Goals:
              </Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
                necessitatibus aut nihil perspiciatis ducimus. Quo quos
                assumenda inventore, quibusdam sint consectetur commodi.
              </Typography>
            </Box>
            <Box sx={{ my: 3 }}>
              <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                Project Scope:
              </Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
                necessitatibus aut nihil perspiciatis ducimus. Quo quos
                assumenda inventore, quibusdam sint consectetur commodi.
              </Typography>
            </Box>
            <Box sx={{ my: 3 }}>
              <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                Permission Required:
              </Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
                necessitatibus aut nihil perspiciatis ducimus. Quo quos
                assumenda inventore, quibusdam sint consectetur commodi.
              </Typography>
            </Box>
            <Box sx={{ my: 3 }}>
              <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                Miscellaneous Info:
              </Typography>
              <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
                necessitatibus aut nihil perspiciatis ducimus. Quo quos
                assumenda inventore, quibusdam sint consectetur commodi.
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
};

export default ProjectEstablishmentView;
