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

const FinancialSpecificationView = () => {
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
        console.log(res.data?.projectEstablishmentData?.FinancialSpecification);
        setData(res.data?.projectEstablishmentData?.FinancialSpecification);
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
          Financial Specification Overview
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
                <Typography variant="h6">Cash Flow :</Typography>
                <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                  {data.CashFlow}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                <Typography variant="h6">Total project cost :</Typography>
                <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                  {data.TotalProjectCost}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                <Typography variant="h6">Estimation of quantities :</Typography>
                <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                  {data.Estimationofquantities}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                <Typography variant="h6">
                  Unit rates of civil works :
                </Typography>
                <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                  {data.Unitratesofcivilworks}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                <Typography variant="h6">Critical factors :</Typography>
                <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                  {data.Criticalfactors}
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

export default FinancialSpecificationView;
