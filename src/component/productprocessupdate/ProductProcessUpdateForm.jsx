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

const ProductProcessUpdateForm = () => {
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
  };

  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", my: 3 }}>
        <Typography variant="h6">
          Create a form for Project Process Update :-
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
            <Box sx={{ width: 500 }}>
              <form>
                <DialogTitle id="responsive-dialog-title">
                  {"Project Process Update Form"}
                </DialogTitle>
                <DialogTitle id="responsive-dialog-title">
                  {"Work Order"}
                </DialogTitle>
                <Box sx={{ px: 5 }}>
                  <Box
                    sx={{
                      py: 1,
                      px: 0,
                    }}
                  >
                    <Box>
                      <Typography variant="subtitle2" component="p">
                        Document
                      </Typography>
                    </Box>
                    <TextField
                      name="Outlined"
                      placeholder="Name"
                      variant="outlined"
                      size="small"
                      sx={{ width: "100%" }}
                      type="file"
                    />
                  </Box>
                  <Box
                    sx={{
                      py: 1,
                      px: 0,
                    }}
                  >
                    <Box>
                      <Typography variant="subtitle2" component="p">
                        Date
                      </Typography>
                    </Box>
                    <TextField
                      name="Outlined"
                      placeholder="Organization"
                      variant="outlined"
                      size="small"
                      sx={{ width: "100%" }}
                      type="date"
                    />
                  </Box>
                </Box>
                <DialogTitle id="responsive-dialog-title">
                  {"Weekly Reports"}
                </DialogTitle>
                <Box sx={{ px: 5 }}>
                  <Box
                    sx={{
                      py: 1,
                      px: 0,
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
                      type="text"
                    />
                  </Box>
                  <Box
                    sx={{
                      py: 1,
                      px: 0,
                    }}
                  >
                    <Box>
                      <Typography variant="subtitle2" component="p">
                        Status Of Completion
                      </Typography>
                    </Box>
                    <TextField
                      name="Outlined"
                      placeholder="Organization"
                      variant="outlined"
                      size="small"
                      sx={{ width: "100%" }}
                      type="text"
                    />
                  </Box>
                </Box>
                <DialogTitle id="responsive-dialog-title">
                  {"Percentage Completion"}
                </DialogTitle>
                <Box sx={{ px: 5 }}>
                  <Box
                    sx={{
                      py: 1,
                      px: 0,
                    }}
                  >
                    <Box>
                      <Typography variant="subtitle2" component="p">
                        Document
                      </Typography>
                    </Box>
                    <TextField
                      name="Outlined"
                      placeholder="Name"
                      variant="outlined"
                      size="small"
                      sx={{ width: "100%" }}
                      type="file"
                    />
                  </Box>
                </Box>
                <DialogTitle id="responsive-dialog-title">
                  {"Payment"}
                </DialogTitle>
                <Box sx={{ px: 5 }}>
                  <Box
                    sx={{
                      py: 1,
                      px: 0,
                    }}
                  >
                    <Box>
                      <Typography variant="subtitle2" component="p">
                        Date
                      </Typography>
                    </Box>
                    <TextField
                      name="Outlined"
                      placeholder="Name"
                      variant="outlined"
                      size="small"
                      sx={{ width: "100%" }}
                      type="Date"
                    />
                  </Box>
                  <Box
                    sx={{
                      py: 1,
                      px: 0,
                    }}
                  >
                    <Box>
                      <Typography variant="subtitle2" component="p">
                        Payment Amount
                      </Typography>
                    </Box>
                    <TextField
                      name="Outlined"
                      placeholder="Organization"
                      variant="outlined"
                      size="small"
                      sx={{ width: "100%" }}
                      type="number"
                    />
                  </Box>
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

export default ProductProcessUpdateForm;
