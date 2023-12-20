import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import axios from "axios";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const DashBoardOverview = () => {
    const [projectTitle, setProjectTitle] = useState();
    const [projectId, setProjectID] = useState();
    const [data, setData] = useState();
  
    useEffect(() => {
      axios
        .get(`http://localhost:3000/api/getProjectEstablishment`)
        .then((res) => {
          setProjectTitle(res.data.projectEstablishmentData);
        });
    }, []);
  
    const selectedId = async (id) => {
      try {
        axios({
          method: "GET",
          url: `http://localhost:3000/api/getSingleProjectEstablishment?projectId=${id}`,
        }).then((res) => {
          console.log(res.data?.projectEstablishmentData);
          setData(res.data?.projectEstablishmentData);
        });
      } catch (error) {
        console.log(error);
      }
    };

  return (
   <Box sx={{ width: "100%" }}>
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: "whitesmoke" }}
      >
        <DrawerHeader />
        <Typography variant="h6" sx={{ textDecoration: "underline" }}>
          Project Establishment Overview
        </Typography>
        <Box sx={{ py: 0, px: 0 }}>
          <InputLabel id="simple-select-label">Project ID</InputLabel>
          <Select
            sx={{
              width: "100%",
              height: 50,
            }}
            onChange={(e) => {
              setProjectID(e.target.value);
              selectedId(e.target.value);
            }}
          >
            {projectTitle &&
              projectTitle.map((e) => {
                return (
                  <MenuItem key={e._id} value={e._id}>
                    {e.ProjectTitle}
                  </MenuItem>
                );
              })}
          </Select>
        </Box>
        {data ? (
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
                  {data.ProjectTitle}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                <Typography variant="h6">Entry Date :</Typography>
                <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                  {data.EntryDate}
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
                        {data.Name}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                      <Typography variant="h6">Organization:</Typography>
                      <Typography
                        variant="subtitle1"
                        component="h6"
                        sx={{ pl: 1 }}
                      >
                        {data.Organization}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                      <Typography variant="h6">Address:</Typography>
                      <Typography
                        variant="subtitle1"
                        component="h6"
                        sx={{ pl: 1 }}
                      >
                        {data.Address}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                      <Typography variant="h6">Contact No.:</Typography>
                      <Typography
                        variant="subtitle1"
                        component="h6"
                        sx={{ pl: 1 }}
                      >
                        {data.ContactNo}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                      <Typography variant="h6">Email:</Typography>
                      <Typography
                        variant="subtitle1"
                        component="h6"
                        sx={{ pl: 1 }}
                      >
                        {data.Email}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                      <Typography variant="h6">Fax:</Typography>
                      <Typography
                        variant="subtitle1"
                        component="h6"
                        sx={{ pl: 1 }}
                      >
                        {data.Fax}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                    <Typography variant="h6">Initial Budget:</Typography>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      sx={{ pl: 1 }}
                    >
                      {data.InitialBudget}
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
                        {data.SponserName}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                      <Typography variant="h6">Organization:</Typography>
                      <Typography
                        variant="subtitle1"
                        component="h6"
                        sx={{ pl: 1 }}
                      >
                        {data.SponserOrganization}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                      <Typography variant="h6">Address:</Typography>
                      <Typography
                        variant="subtitle1"
                        component="h6"
                        sx={{ pl: 1 }}
                      >
                        {data.SponserAddress}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                      <Typography variant="h6">Contact No.:</Typography>
                      <Typography
                        variant="subtitle1"
                        component="h6"
                        sx={{ pl: 1 }}
                      >
                        {data.SponserContactNo}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                      <Typography variant="h6">Email:</Typography>
                      <Typography
                        variant="subtitle1"
                        component="h6"
                        sx={{ pl: 1 }}
                      >
                        {data.SponserEmail}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                      <Typography variant="h6">Fax:</Typography>
                      <Typography
                        variant="subtitle1"
                        component="h6"
                        sx={{ pl: 1 }}
                      >
                        {data.SponserFax}
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
                  {data.ProjectOverview}
                </Typography>
              </Box>
              <Box sx={{ my: 3 }}>
                <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                  Project Goals:
                </Typography>
                <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                  {data.ProjectGoal}
                </Typography>
              </Box>
              <Box sx={{ my: 3 }}>
                <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                  Project Scope:
                </Typography>
                <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                  {data.ProjectScope}
                </Typography>
              </Box>
              <Box sx={{ my: 3 }}>
                <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                  Permission Required:
                </Typography>
                <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                  {data.PermissionRequired}
                </Typography>
              </Box>
              <Box sx={{ my: 3 }}>
                <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                  Miscellaneous Info:
                </Typography>
                <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                  {data.MiscellaneousInfo}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ) : (
          <Typography variant="h6" sx={{ pt: 3, textAlign: "center" }}>
            No Data
          </Typography>
        )}
      </Box>
    </Box>
  )
}

export default DashBoardOverview