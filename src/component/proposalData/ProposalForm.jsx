import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "axios";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const ProposalForm = () => {
  const [open, setOpen] = useState(false);
  const [Title, setTitle] = useState();
  const [Description, setDescription] = useState();
  const [Contact, setContact] = useState();
  const [Information, setInformation] = useState();
  const [Tender, setTender] = useState();
  const [projectTitle, setProjectTitle] = useState();
  const [projectId, setProjectID] = useState();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    axios
      .get(`https://vitbackend.onrender.com/api/getProjectEstablishment`)
      .then((res) => {
        console.log(res.data);
        setProjectTitle(res.data.projectEstablishmentData);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("projectId", projectId);
      formData.append("projectTitle", Title);
      formData.append("projectDescription", Description);
      formData.append("contactPerson", Contact);
      formData.append("infomationForbiding", Information);
      formData.append("tendorNotice", Tender);

      const response = await axios({
        method: "POST",
        url: "https://vitbackend.onrender.com/api/createProposal",
        data: formData,
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(projectId)

  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", my: 3 }}>
        <Typography variant="h6">Create a form for Proposal :-</Typography>
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
                  {"Standard Form & Guidelines Form"}
                </DialogTitle>

                <Box sx={{ py: 1, px: 7 }}>
                  <InputLabel id="simple-select-label">Project ID</InputLabel>
                  <Select
                    sx={{
                      width: "100%",
                      height: 50,
                    }}
                    onChange={(e) => {
                      setProjectID(e.target.value);
                    }}
                  >
                    {projectTitle &&
                      projectTitle.map((e) => {
                        return (
                          <MenuItem key={e._id} value={e._id}>
                            {e.ProjectTitle}
                          </MenuItem>
                        );
                      })}
                  </Select>

                  <Box>
                    <Typography variant="subtitle2" component="p">
                      Proejct Title
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Project Title"
                    variant="outlined"
                    size="small"
                    sx={{ width: "100%" }}
                    type="text"
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
                      Project Description
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Project Description"
                    variant="outlined"
                    size="small"
                    type="text"
                    sx={{ width: "100%" }}
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
                      Contact Person
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Contact Person"
                    variant="outlined"
                    size="small"
                    type="text"
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
                      Information for Bidding
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Information for Bidding"
                    variant="outlined"
                    size="small"
                    type="text"
                    sx={{ width: "100%" }}
                    onChange={(e) => setInformation(e.target.value)}
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
                      Tender Notice
                    </Typography>
                  </Box>
                  <TextField
                    name="Outlined"
                    placeholder="Tender Notice"
                    variant="outlined"
                    size="small"
                    type="file"
                    sx={{ width: "100%" }}
                    onChange={(e) => setTender(e.target.files[0])}
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

export default ProposalForm;
