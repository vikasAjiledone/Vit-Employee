import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import Sidebar from "../Sidebar";
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

const AssestManagementForm = () => {
  const [open, setOpen] = useState(false);
  const [assetsNo, setAssetsNo] = useState();
  const [name, setname] = useState();
  const [Description, setDescription] = useState();
  const [Installation, setInstallation] = useState();
  const [Value, setValue] = useState();
  const [Location, setLocation] = useState();
  const [Vendor, setVendor] = useState();
  const [VContact, setVContact] = useState();
  const [VEmail, setVEmail] = useState();
  const [Warranty, setWarranty] = useState();
  const [Condition, setCondition] = useState();
  const [EndOfLife, setEndOfLife] = useState();

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
    formData.append("assetsNo", assetsNo);
    formData.append("name", name);
    formData.append("Description", Description);
    formData.append("Installation", Installation);
    formData.append("Value", Value);
    formData.append("Location", Location);
    formData.append("Vendor", Vendor);
    formData.append("VContact", VContact);
    formData.append("VEmail", VEmail);
    formData.append("Warranty", Warranty);
    formData.append("Condition", Condition);
    formData.append("EndOfLife", EndOfLife);
  };

  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", my: 3 }}>
        <Typography variant="h6">
          Create a form for Assests Management :-
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
                  {"Assests Management Form"}
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
                    <MenuItem value={1} selected>
                      Red
                    </MenuItem>
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
                      Assets No.
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Assets No."
                    variant="outlined"
                    size="small"
                    sx={{ width: "100%" }}
                    onChange={(e) => setAssetsNo(e.target.value)}
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
                      Asset name
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Asset name"
                    variant="outlined"
                    size="small"
                    sx={{ width: "100%" }}
                    onChange={(e) => setname(e.target.value)}
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
                      Description
                    </Typography>
                  </Box>
                  <Textarea
                    minRows={2}
                    onChange={(e) => setDescription(e.target.value)}
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
                      Installation date
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Installation date"
                    variant="outlined"
                    size="small"
                    type="date"
                    sx={{ width: "100%" }}
                    onChange={(e) => setInstallation(e.target.value)}
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
                      Asset Value
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Asset Value"
                    variant="outlined"
                    size="small"
                    type="number"
                    sx={{ width: "100%" }}
                    onChange={(e) => setValue(e.target.value)}
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
                      Location
                    </Typography>
                  </Box>
                  <Textarea
                    minRows={2}
                    onChange={(e) => setLocation(e.target.value)}
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
                      Vendor Name
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Vendor Name"
                    variant="outlined"
                    size="small"
                    type="text"
                    sx={{ width: "100%" }}
                    onChange={(e) => setVendor(e.target.value)}
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
                      Vendor Contact No
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Vendor Contact No"
                    variant="outlined"
                    size="small"
                    type="number"
                    sx={{ width: "100%" }}
                    onChange={(e) => setVContact(e.target.value)}
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
                      Vendor Email Id
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Vendor Email Id"
                    variant="outlined"
                    size="small"
                    type="email"
                    sx={{ width: "100%" }}
                    onChange={(e) => setVEmail(e.target.value)}
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
                      Warranty Expiry Date
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Warranty Expiry Date"
                    variant="outlined"
                    size="small"
                    type="date"
                    sx={{ width: "100%" }}
                    onChange={(e) => setWarranty(e.target.value)}
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
                      Condition
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Condition"
                    variant="outlined"
                    size="small"
                    type="text"
                    sx={{ width: "100%" }}
                    onChange={(e) => setCondition(e.target.value)}
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
                      End of Life
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="End of Life"
                    variant="outlined"
                    size="small"
                    type="text"
                    sx={{ width: "100%" }}
                    onChange={(e) => setEndOfLife(e.target.value)}
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

export default AssestManagementForm;
