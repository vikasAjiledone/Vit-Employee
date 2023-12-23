import React, { useState, useEffect } from "react";
import Sidebar from "../../pages/Sidebar";
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
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const TechnicalSpecificationView = () => {
  const [projectTitle, setProjectTitle] = useState();
  const [projectId, setProjectID] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(`https://vitbackend.onrender.com/api/getProjectEstablishment`)
      .then((res) => {
        setProjectTitle(res.data.projectEstablishmentData);
      });
  }, []);

  const selectedId = async (id) => {
    try {
      axios({
        method: "GET",
        url: `https://vitbackend.onrender.com/api/getSingleProjectEstablishment?projectId=${id}`,
      }).then((res) => {
        console.log(res.data?.projectEstablishmentData?.TechnicalSpecification);
        setData(res.data?.projectEstablishmentData?.TechnicalSpecification);
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
              <Box sx={{ my: 3 }}>
                <Typography variant="h6">
                  Basic Guidelines for Contractor :
                </Typography>
                <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                  {data.BasicGuidelinesforContractor}
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6">Noise :</Typography>
                <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                  {data.Noise}
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6">Embarkment Construction :</Typography>
                <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                  {data.EmbarkmentConstruction}
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6">
                  Soil Erosion and Sedimentation Control :
                </Typography>
                <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                  {data.SoilErosionandSedimentationControl}
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6">Road safety :</Typography>
                <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                  {data.Roadsafety}
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6">
                  Sanitation & Waste Disposal :
                </Typography>
                <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                  {data.SanitationWasteDisposal}
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6">Safety Guidelines :</Typography>
                <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                  {data.SafetyGuidelines}
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6">Environmental Screening :</Typography>
                <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                 {data.EnvironmentalScreening}
                </Typography>
              </Box>
              <Typography
                variant="h6"
                sx={{ my: 3, textDecoration: "underline" }}
              >
                Technical Specifications
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6">Introductions :</Typography>
                <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                  {data.TechnicalIntroduction}
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6">
                  Provisions adhered to MoRTH Specifications :
                </Typography>
                <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                  {data.TechnicalProvisionsadheredtoMoRTHSpecifications}
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6">Contract Drawings :</Typography>
                <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                 {data.TechnicalContractDrawings}
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6">Site information :</Typography>
                <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                 {data.TechnicalSiteinformation}
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6">Public Utilities :</Typography>
                <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                  {data.TechnicalPublicUtilities}
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6">
                  Traffic Plan during construction :
                </Typography>
                <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                  {data.TechnicalTrafficPlanduringconstruction}
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6">Item rates of work :</Typography>
                <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                  {data.TechnicalItemratesofwork}
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6">
                  Methodology and sequence and work :
                </Typography>
                <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                 {data.TechnicalMethodologyandsequenceandwork}
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
  );
};

export default TechnicalSpecificationView;
