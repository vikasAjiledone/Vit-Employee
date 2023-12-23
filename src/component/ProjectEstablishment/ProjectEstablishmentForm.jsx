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
import axios from "axios";

const ProjectEstablishmentForm = () => {
  const [open, setOpen] = useState(false);
  const [Title, setTitle] = useState();
  const [date, setDate] = useState();
  const [Name, setName] = useState();
  const [Organization, setOrganization] = useState();
  const [Address, setAddress] = useState();
  const [Contact, setContact] = useState();
  const [Email, setEmail] = useState();
  const [Fax, setFax] = useState();
  const [Budget, setBudget] = useState();
  const [sName, setSname] = useState();
  const [sOrganization, setSOrganization] = useState();
  const [sAddress, setSAddress] = useState();
  const [sContact, setSContact] = useState();
  const [sEmail, setSEmail] = useState();
  const [sFax, setSFax] = useState();
  const [Overview, setOverview] = useState();
  const [Goals, setGoals] = useState();
  const [Scope, setScope] = useState();
  const [Permission, setPermission] = useState();
  const [Miscellaneous, setMiscellaneous] = useState();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method:"POST",
        url : "https://vitbackend.onrender.com/api/createProjectEstablisment",
        data :{
          projectTitle: Title ,
          entryDate : date,
          name : Name,
          organization :Organization,
          address : Address,
          contactNo :Contact,
          email : Email,
          fax: Fax,
          initialBudget : Budget,
          sponsername : sName,
          sponserorganization : sOrganization,
          sponseraddress : sAddress,
          sponsercontactNo : sContact,
          sponseremail : sEmail,
          sponserfax : sFax,
          projectOverview : Overview,
          projectGoal : Goals,
          projectScope : Scope,
          permissionRequired : Permission,
          miscellaneousInfo : Miscellaneous,
        }
      }) 
      console.log(response)
    } catch (error) {
      console.log(error)
    }
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
              <form onSubmit={handleSubmit}>
                <DialogTitle id="responsive-dialog-title">
                  {"Project Establishment Form"}
                </DialogTitle>

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
                    onChange={(e) => setTitle(e.target.value)}
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
                    onChange={(e) => setDate(e.target.value)}
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
                    onChange={(e) => setBudget(e.target.value)}
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
                      onChange={(e) => setSname(e.target.value)}
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
                      onChange={(e) => setSOrganization(e.target.value)}
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
                      onChange={(e) => setSAddress(e.target.value)}
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
                      onChange={(e) => setSContact(e.target.value)}
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
                      onChange={(e) => setSEmail(e.target.value)}
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
                      onChange={(e) => setSFax(e.target.value)}
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
                  <Textarea
                    minRows={2}
                    onChange={(e) => setOverview(e.target.value)}
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
                      Project Goals
                    </Typography>
                  </Box>
                  <Textarea
                    minRows={2}
                    onChange={(e) => setGoals(e.target.value)}
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
                      Project Scope
                    </Typography>
                  </Box>
                  <Textarea
                    minRows={2}
                    onChange={(e) => setScope(e.target.value)}
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
                    onChange={(e) => setPermission(e.target.value)}
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
                  <Textarea
                    minRows={2}
                    onChange={(e) => setMiscellaneous(e.target.value)}
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

export default ProjectEstablishmentForm;
