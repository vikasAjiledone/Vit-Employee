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

const TechicalSpecificationForm = () => {
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
          Create a form for Technical Specification :-
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
                  {"General Conditions for Works"}
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
                      Basic Guidelines for Contractor
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
                      Noise
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
                      Embarkment Construction
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
                      Soil Erosion and Sedimentation Control
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
                      Soil Erosion and Sedimentation Control
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
                      Road safety
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
                      Sanitation & Waste Disposal
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
                      Safety Guidelines
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
                      Environmental Screening
                    </Typography>
                  </Box>
                  <Textarea minRows={2} />
                </Box>
                <DialogTitle id="responsive-dialog-title">
                  {"Technical Specifications"}
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
                        Introductions
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
                        Provisions adhered to MoRTH Specifications
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
                        Contract Drawings
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
                        Site information
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
                        Public Utilities
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
                        Traffic Plan during construction
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
                        Item rates of work
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
                        Methodology and sequence and work
                      </Typography>
                    </Box>
                    <Textarea minRows={2} />
                  </Box>
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

export default TechicalSpecificationForm;
