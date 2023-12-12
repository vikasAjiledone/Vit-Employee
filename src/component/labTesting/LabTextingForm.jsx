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
import FormControl from "@mui/material/FormControl";
import { Textarea } from "@mui/joy";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const LabTextingForm = () => {
  const [open, setOpen] = useState(false);
  const [Field, setField] = useState();
  const [Lab, setLab] = useState();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    const formData = new FormData();
    formData.append("Field", Field)
    formData.append("Lab", Lab)
    console.log(Lab, Field)
  }

  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", my: 3 }}>
        <Typography variant="h6">Create a form for Lab Testing :-</Typography>
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
                  {"Lab Testing Form"}
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
                      Field Laboratory
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Field Laboratory"
                    variant="outlined"
                    size="small"
                    sx={{ width: "100%" }}
                    type="text"
                    onChange={(e) => setField(e.target.value)}
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
                      Lab Testing
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Lab Testing"
                    variant="outlined"
                    size="small"
                    sx={{ width: "100%" }}
                    type="text"
                    onChange={(e) => setLab(e.target.value)}
                  />
                </Box>
                <DialogActions>
                  <Button onClick={handleClose} variant="contained" type="submit">
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

export default LabTextingForm;
