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

const ContactInfoForm = () => {
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
          Create a form for Contract Information :-
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
                  {"Contract Information Form"}
                </DialogTitle>
               
                <Box sx={{ px: 0 }}>
                <DialogTitle id="responsive-dialog-title">
                  {"Contractor Information Form"}
                </DialogTitle>
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
            
                <Box sx={{ px: 0 }}>
                  <Box
                    sx={{
                      py: 1,
                      px: 7,
                    }}
                  >
                    <Box>
                      <Typography variant="subtitle2" component="p">
                        Contract mode
                      </Typography>
                    </Box>
                    <TextField
                      name="Outlined"
                      placeholder="Contract mode"
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
                      Key dates and Contact period
                      </Typography>
                    </Box>
                    <TextField
                      name="Outlined"
                      placeholder="Key dates and Contact period"
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
                      Contract Award Date
                      </Typography>
                    </Box>
                    <TextField
                      name="Outlined"
                      placeholder="Contract Award Date"
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
                      Sub-Contractor Detai
                      </Typography>
                    </Box>
                    <TextField
                      name="Outlined"
                      placeholder="Sub-Contractor Detai"
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
                      Construction Contract Agreement 
                      </Typography>
                    </Box>
                    <TextField
                      name="Outlined"
                      placeholder="Construction Contract Agreement "
                      variant="outlined"
                      size="small"
                      type="file"
                      sx={{ width: "100%" }}
                    />
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
  )
}

export default ContactInfoForm