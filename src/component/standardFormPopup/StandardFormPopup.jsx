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

const StandardFormPopup = () => {
  const [open, setOpen] = useState(false);
  const [Reconnaissance, setReconnaissance] = useState("");
  const [Topographic, setTopographic] = useState("");
  const [Layout, setLayout] = useState("");
  const [Traffic, setTraffic] = useState("");
  const [Forest, setForest] = useState("");
  const [Technical, setTechnical] = useState("");
  const [Soil, setSoil] = useState("");
  const [Socio, setSocio] = useState("");
  const [Built, setBuilt] = useState("");
  const [cost, setcost] = useState("");
  const [Id, setID] = useState("");

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const submitDocs = (e) => {
    console.log("data");
    e.preventDefault();
    const formData = new FormData();
    formData.append("Reconnaissance", Reconnaissance);
    formData.append("Topographic", Topographic);
    formData.append("Layout", Layout);
    formData.append("Traffic", Traffic);
    formData.append("Forest", Forest);
    formData.append("Technical", Technical);
    formData.append("Soil", Soil);
    formData.append("Socio", Socio);
    formData.append("Built", Built);
    formData.append("cost", cost);
    console.log(
      Reconnaissance,
      Topographic,
      Layout,
      Traffic,
      Forest,
      Technical,
      Soil,
      Socio,
      Built,
      cost
    );
    console.log("submit");
  };

  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", my: 3 }}>
        <Typography variant="h6">
          Create a form for Standard Form & Guidelines :-
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
              <form onSubmit={submitDocs}>
                <DialogTitle id="responsive-dialog-title">
                  {"Standard Form & Guidelines Form"}
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
                      Reconnaissance Report
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Reconnaissance"
                    variant="outlined"
                    size="small"
                    sx={{ width: "100%" }}
                    type="file"
                    onChange={(e) => setReconnaissance(e.target.files[0])}
                    inputProps={{ accept: "application/pdf" }}
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
                      Topographic Survey Report
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Topographic"
                    variant="outlined"
                    size="small"
                    sx={{ width: "100%" }}
                    type="file"
                    onChange={(e) => setTopographic(e.target.files[0])}
                    inputProps={{ accept: "application/pdf" }}
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
                      Layout Plans
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Layout"
                    variant="outlined"
                    size="small"
                    type="file"
                    sx={{ width: "100%" }}
                    onChange={(e) => setLayout(e.target.files[0])}
                    inputProps={{ accept: "application/pdf" }}
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
                      Traffic Survey Analysis
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Traffic"
                    variant="outlined"
                    size="small"
                    type="file"
                    sx={{ width: "100%" }}
                    onChange={(e) => setTraffic(e.target.files[0])}
                    inputProps={{ accept: "application/pdf" }}
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
                      Forest clearance Forms
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Forest"
                    variant="outlined"
                    size="small"
                    type="file"
                    sx={{ width: "100%" }}
                    onChange={(e) => setForest(e.target.files[0])}
                    inputProps={{ accept: "application/pdf" }}
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
                      Technical Requirement Report
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Technical"
                    variant="outlined"
                    size="small"
                    type="file"
                    sx={{ width: "100%" }}
                    onChange={(e) => setTechnical(e.target.files[0])}
                    inputProps={{ accept: "application/pdf" }}
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
                      Soil Testing Report
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Soil"
                    variant="outlined"
                    size="small"
                    type="file"
                    sx={{ width: "100%" }}
                    onChange={(e) => setSoil(e.target.files[0])}
                    inputProps={{ accept: "application/pdf" }}
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
                      Socio Economic Profile
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Socio"
                    variant="outlined"
                    size="small"
                    type="file"
                    sx={{ width: "100%" }}
                    inputProps={{ accept: "application/pdf" }}
                    onChange={(e) => setSocio(e.target.files[0])}
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
                      Built Environment layout
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Built"
                    variant="outlined"
                    size="small"
                    type="file"
                    sx={{ width: "100%" }}
                    inputProps={{ accept: "application/pdf" }}
                    onChange={(e) => setBuilt(e.target.files[0])}
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
                      Initial cost estimation plan
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="cost"
                    variant="outlined"
                    size="small"
                    type="file"
                    sx={{ width: "100%" }}
                    inputProps={{ accept: "application/pdf" }}
                    onChange={(e) => setcost(e.target.files[0])}
                  />
                </Box>

                <DialogActions>
                  {/* <Button autoFocus onClick={handleClose}>
                      Disagree
                    </Button> */}
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

export default StandardFormPopup;
