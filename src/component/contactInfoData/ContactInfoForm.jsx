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

const ContactInfoForm = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [Organization, setOrganization] = useState("");
  const [Address, setAddress] = useState("");
  const [Contact, setContact] = useState("");
  const [Email, setEmail] = useState("");
  const [Fax, setFax] = useState("");
  const [Contract, setContract] = useState("");
  const [Key, setKey] = useState("");
  const [Award, setAward] = useState("");
  const [SubContractor, setSubContractor] = useState("");
  const [Construction, setConstruction] = useState("");

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    console.log("vikas")
    e.preventDefault();
    const formData = new FormData();
    formData.append("Name", name);
    formData.append("Organization", Organization);
    formData.append("Address", Address);
    formData.append("Contact", Contact);
    formData.append("Email", Email);
    formData.append("Fax", Fax);
    formData.append("Contract", Contract);
    formData.append("Key", Key);
    formData.append("Award", Award);
    formData.append("SubContractor", SubContractor);
    formData.append("Construction", Construction);
    console.log(
      name,
      Organization,
      Address,
      Contact,
      Email,
      Fax,
      Contract,
      Key,
      Award,
      SubContractor,
      Construction
    );
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
              <form onSubmit={handleSubmit}>
                <Box sx={{ px: 0 }}>
                  <DialogTitle id="responsive-dialog-title">
                    {"Contractor Information Form"}
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
                      onChange={(e) => setName(e.target.value)}
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
                      onChange={(e) => setOrganization(e.target.value)}
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
                      onChange={(e) => setAddress(e.target.value)}
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
                      onChange={(e) => setContact(e.target.value)}
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
                      onChange={(e) => setEmail(e.target.value)}
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
                      onChange={(e) => setFax(e.target.value)}
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
                      onChange={(e) => setContract(e.target.value)}
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
                      onChange={(e) => setKey(e.target.value)}
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
                      onChange={(e) => setAward(e.target.value)}
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
                        Sub-Contractor Detail
                      </Typography>
                    </Box>
                    <TextField
                      name="Outlined"
                      placeholder="Sub-Contractor Detail"
                      variant="outlined"
                      size="small"
                      sx={{ width: "100%" }}
                      onChange={(e) => setSubContractor(e.target.value)}
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
                      onChange={(e) => setConstruction(e.target.files[0])}
                    />
                  </Box>
                </Box>

                <DialogActions>
                  {/* <Button autoFocus onClick={handleClose}>
                      Disagree
                    </Button> */}
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

export default ContactInfoForm;
