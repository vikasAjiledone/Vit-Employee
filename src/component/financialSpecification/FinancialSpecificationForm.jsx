import React, { useState } from "react";
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

const FinancialSpecificationForm = () => {
  const [open, setOpen] = useState(false);
  const [Cash, setCash] = useState();
  const [project, setproject] = useState();
  const [Estimation, setEstimation] = useState();
  const [Unit, setUnit] = useState();
  const [Critical, setCritical] = useState();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Cash", Cash)
    formData.append("project", project)
    formData.append("Estimation", Estimation)
    formData.append("Unit", Unit)
    formData.append("Critical", Critical)
    console.log(Cash, project, Estimation, Unit, Critical)
  };

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
                    // marginTop: 35,
                    width: "100%",
                    height: 50,
                  }}
                >
                  <MenuItem value={1} selected>Red</MenuItem>
                  <MenuItem value={2}>Black</MenuItem>
                  <MenuItem value={3}>Blue</MenuItem>
                  <MenuItem value={4}>Green</MenuItem>
                  <MenuItem value={5}>Yellow</MenuItem>
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
