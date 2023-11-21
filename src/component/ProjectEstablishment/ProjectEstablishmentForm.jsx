import React from "react";
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

const ProjectEstablishmentForm = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", my: 3 }}>
        <Typography variant="h6">
          Create a form for Project Establishment :-
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
              <FormControl>
                <DialogTitle id="responsive-dialog-title">
                  {"Project Establishment Form"}
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
                      Project ID
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Project ID"
                    variant="outlined"
                    size="small"
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
                      Project Title
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Project Title"
                    variant="outlined"
                    size="small"
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
                      Entry Date
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Enter The Date"
                    variant="outlined"
                    size="small"
                    type="date"
                    sx={{ width: "100%" }}
                  />
                </Box>
                <DialogTitle id="responsive-dialog-title">
                  {"Client Information"}
                </DialogTitle>
                <Box sx={{ px: 5 }}>
                  <Box
                    sx={{
                      py: 1,
                      px: 7,
                    }}
                  >
                    <Box>
                      <Typography variant="subtitle2" component="p">
                        Name
                      </Typography>
                    </Box>
                    <TextField
                      name="Outlined"
                      placeholder="Name"
                      variant="outlined"
                      size="small"
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
                        Organization
                      </Typography>
                    </Box>
                    <TextField
                      name="Outlined"
                      placeholder="Organization"
                      variant="outlined"
                      size="small"
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
                        Address
                      </Typography>
                    </Box>
                    <TextField
                      name="Outlined"
                      placeholder="Address"
                      variant="outlined"
                      size="small"
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
                        Contact No.
                      </Typography>
                    </Box>
                    <TextField
                      name="Outlined"
                      placeholder="Contact No"
                      variant="outlined"
                      size="small"
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
                      placeholder="Email"
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
                        Fax
                      </Typography>
                    </Box>
                    <TextField
                      name="Outlined"
                      placeholder="Fax"
                      variant="outlined"
                      size="small"
                      sx={{ width: "100%" }}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    py: 1,
                    px: 7,
                  }}
                >
                  <Box>
                    <Typography variant="subtitle2" component="p">
                      Initial Budget
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Initial Budget"
                    variant="outlined"
                    size="small"
                    sx={{ width: "100%" }}
                  />
                </Box>
                <DialogTitle id="responsive-dialog-title">
                  {"Sponser Details"}
                </DialogTitle>
                <Box sx={{ px: 5 }}>
                  <Box
                    sx={{
                      py: 1,
                      px: 7,
                    }}
                  >
                    <Box>
                      <Typography variant="subtitle2" component="p">
                        Name
                      </Typography>
                    </Box>
                    <TextField
                      name="Outlined"
                      placeholder="Name"
                      variant="outlined"
                      size="small"
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
                        Organization
                      </Typography>
                    </Box>
                    <TextField
                      name="Outlined"
                      placeholder="Organization"
                      variant="outlined"
                      size="small"
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
                        Address
                      </Typography>
                    </Box>
                    <TextField
                      name="Outlined"
                      placeholder="Address"
                      variant="outlined"
                      size="small"
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
                        Contact No
                      </Typography>
                    </Box>
                    <TextField
                      name="Outlined"
                      placeholder="Contact No"
                      variant="outlined"
                      size="small"
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
                      placeholder="Email"
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
                        Fax
                      </Typography>
                    </Box>
                    <TextField
                      name="Outlined"
                      placeholder="Fax"
                      variant="outlined"
                      size="small"
                      sx={{ width: "100%" }}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    py: 1,
                    px: 7,
                  }}
                >
                  <Box>
                    <Typography variant="subtitle2" component="p">
                      Project Overview
                    </Typography>
                  </Box>
                  <Textarea minRows={2} />
                </Box>
                <Box
                  sx={{
                    py: 1,
                    px: 7,
                  }}
                >
                  <Box>
                    <Typography variant="subtitle2" component="p">
                      Project Goals
                    </Typography>
                  </Box>
                  <Textarea minRows={2} />
                </Box>
                <Box
                  sx={{
                    py: 1,
                    px: 7,
                  }}
                >
                  <Box>
                    <Typography variant="subtitle2" component="p">
                      Project Scope
                    </Typography>
                  </Box>
                  <Textarea minRows={2} />
                </Box>
                <Box
                  sx={{
                    py: 1,
                    px: 7,
                  }}
                >
                  <Box>
                    <Typography variant="subtitle2" component="p">
                      Permission Required
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder=""
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
                      Miscellaneous Info
                    </Typography>
                  </Box>
                  <Textarea minRows={2} />
                </Box>
                <DialogActions>
                  {/* <Button autoFocus onClick={handleClose}>
                      Disagree
                    </Button> */}
                  <Button onClick={handleClose} variant="contained">
                    Submit
                  </Button>
                </DialogActions>
              </FormControl>
            </Box>
          </Dialog>
        </Box>
      </Box>
    </div>
  );
};

export default ProjectEstablishmentForm;
