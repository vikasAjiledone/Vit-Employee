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

const PostConstructionForm = () => {
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
      <Typography variant="h6">Create a form for Post Construction:-</Typography>
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
                {"Post Construction Form"}
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
                    Post-Project report
                  </Typography>
                </Box>
                <TextField
                  name="Outlined"
                  placeholder=""
                  variant="outlined"
                  size="small"
                  sx={{ width: "100%" }}
                  type="file"
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
                    Completion Certificate
                  </Typography>
                </Box>
                <TextField
                  name="Outlined"
                  placeholder=""
                  variant="outlined"
                  size="small"
                  sx={{ width: "100%" }}
                  type="file"
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
                  Maintenance conditions (if any)
                  </Typography>
                </Box>
                <TextField
                  name="Outlined"
                  placeholder=""
                  variant="outlined"
                  size="small"
                  sx={{ width: "100%" }}
                  type="file"
                />
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

export default PostConstructionForm