import React, { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import axios from 'axios'

const FinancialSpecificationForm = () => {
  const [open, setOpen] = useState(false);
  const [Cash, setCash] = useState();
  const [project, setproject] = useState();
  const [Estimation, setEstimation] = useState();
  const [Unit, setUnit] = useState();
  const [Critical, setCritical] = useState();
  const [projectId, setProjectID] = useState();
  const [projectTitle, setProjectTitle] = useState();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: `https://vitbackend.onrender.com/api/createFinancialSpecification`,
        data: {
          projectId : projectId,
          cashFlow : Cash,
          totalProjectCost : project,
          estimationOfQualities : Estimation,
          unitRateOfCivilWorks : Unit,
          criticalFactors : Critical,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios
      .get(`https://vitbackend.onrender.com/api/getProjectEstablishment`)
      .then((res) => {
        console.log(res.data);
        setProjectTitle(res.data.projectEstablishmentData);
      });
  }, []);

  console.log(projectId)

  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", my: 3 }}>
        <Typography variant="h6">
          Create a form for Financial Specification :-
        </Typography>
        <Box>
          <Button variant="contained" onClick={handleClickOpen} sx={{ ml: 2 }}>
            Click
          </Button>
          <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <Box>
              <form onSubmit={handleSubmit}>
                <DialogTitle id="responsive-dialog-title">
                  {"Financial Specification Form"}
                </DialogTitle>
                <Box sx={{ py: 1, px: 7 }}>
                <InputLabel id="simple-select-label">Project ID</InputLabel>
                <Select
                    sx={{
                      width: "100%",
                      height: 50,
                    }}
                    onChange={(e) => {
                      setProjectID(e.target.value);
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
                <Box
                  sx={{
                    py: 1,
                    px: 7,
                    width: 500,
                  }}
                >
                  <Box>
                    <Typography variant="subtitle2" component="p">
                      Cash Flow
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Cash Flow"
                    variant="outlined"
                    size="small"
                    sx={{ width: "100%" }}
                    type="text"
                    onChange={(e) => setCash(e.target.value)}
                  />
                </Box>
                <Box
                  sx={{
                    py: 1,
                    px: 7,
                  }}
                >
                  <Box>
                    <Typography variant="subtitle2" component="p">
                      Total project cost
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Total project cost"
                    variant="outlined"
                    size="small"
                    sx={{ width: "100%" }}
                    type="text"
                    onChange={(e) => setproject(e.target.value)}
                  />
                </Box>
                <Box
                  sx={{
                    py: 1,
                    px: 7,
                  }}
                >
                  <Box>
                    <Typography variant="subtitle2" component="p">
                      Estimation of quantities
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Estimation of quantities"
                    variant="outlined"
                    size="small"
                    type="text"
                    sx={{ width: "100%" }}
                    onChange={(e) => setEstimation(e.target.value)}
                  />
                </Box>

                <Box
                  sx={{
                    py: 1,
                    px: 7,
                  }}
                >
                  <Box>
                    <Typography variant="subtitle2" component="p">
                      Unit rates of civil works
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Unit rates of civil works"
                    variant="outlined"
                    size="small"
                    type="text"
                    sx={{ width: "100%" }}
                    onChange={(e) => setUnit(e.target.value)}
                  />
                </Box>

                <Box
                  sx={{
                    py: 1,
                    px: 7,
                  }}
                >
                  <Box>
                    <Typography variant="subtitle2" component="p">
                      Critical factors
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Critical factors"
                    variant="outlined"
                    size="small"
                    type="text"
                    sx={{ width: "100%" }}
                    onChange={(e) => setCritical(e.target.value)}
                  />
                </Box>
                <DialogActions>
                  <Button
                    onClick={handleClose}
                    variant="contained"
                    type="submit"
                  >
                    Submit
                  </Button>
                </DialogActions>
              </form>
            </Box>
          </Dialog>
        </Box>
      </Box>
    </div>
  );
};

export default FinancialSpecificationForm;
