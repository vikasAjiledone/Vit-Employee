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
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const SiteManagementPlanForm = () => {
  const [open, setOpen] = useState(false);

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
    console.log(e);
  };

  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", my: 3 }}>
        <Typography variant="h6">
          Create a form for Site Management Plan :-
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
                  {"Site Management Plan"}
                </DialogTitle>
                <Box
                  sx={{
                    py: 1,
                    px: 7,
                    width: 500,
                  }}
                >
                  <Box>
                    <Typography variant="subtitle2" component="p">
                      Name
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Project ID"
                    variant="outlined"
                    size="small"
                    sx={{ width: "100%" }}
                    type="text"
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
                      Company Name
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Project Title"
                    variant="outlined"
                    size="small"
                    sx={{ width: "100%" }}
                    type="text"
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
                      Role / Position
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Enter The Date"
                    variant="outlined"
                    size="small"
                    type="text"
                    sx={{ width: "100%" }}
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
                      Contact
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Initial Budget"
                    variant="outlined"
                    size="small"
                    type="text"
                    sx={{ width: "100%" }}
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
                      Email
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Initial Budget"
                    variant="outlined"
                    size="small"
                    type="email"
                    sx={{ width: "100%" }}
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
                      Other responsibilities
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Initial Budget"
                    variant="outlined"
                    size="small"
                    type="text"
                    sx={{ width: "100%" }}
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
                      Schedules
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Initial Budget"
                    variant="outlined"
                    size="small"
                    type="file"
                    sx={{ width: "100%" }}
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
                      Site Management Layout
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Initial Budget"
                    variant="outlined"
                    size="small"
                    type="file"
                    sx={{ width: "100%" }}
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

export default SiteManagementPlanForm;
