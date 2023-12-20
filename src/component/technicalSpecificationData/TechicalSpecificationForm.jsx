import React, { useState, useEffect } from "react";
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
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import axios from 'axios'

const TechicalSpecificationForm = () => {
  const [open, setOpen] = useState(false);
  const [Basic, setBasic] = useState();
  const [Noise, setNoise] = useState();
  const [Embarkment, setEmbarkment] = useState();
  const [Soil, setSoil] = useState();
  const [Road, setRoad] = useState();
  const [Sanitation, setSanitation] = useState();
  const [Safety, setSafety] = useState();
  const [Environmental, setEnvironmental] = useState();
  const [Introductions, setIntroductions] = useState();
  const [Provisions, setProvisions] = useState();
  const [Contract, setContract] = useState();
  const [Site, setSite] = useState();
  const [Public, setPublic] = useState();
  const [Traffic, setTraffic] = useState();
  const [Item, setItem] = useState();
  const [Methodology, setMethodology] = useState();
  const [projectId, setProjectID] = useState();
  const [projectTitle, setProjectTitle] = useState();

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: `http://localhost:3000/api/createTechnicalSpecification`,
        data: {
          projectId: projectId,
          basicGuidelineForContractor: Basic,
          noise: Noise,
          embarkmentConstruction: Embarkment,
          soilErosionAndSedimentationControl: Soil,
          roadSafety: Road,
          sanitationAndWasteDisposal: Sanitation,
          safetyGuideline: Safety,
          environmentScreening: Environmental,
          technicalIntroduction: Introductions,
          technicalProvisionsadheredtoMoRTHSpecifications: Provisions,
          technicalContractDrawings: Contract,
          technicalSiteinformation: Site,
          technicalPublicUtilities: Public,
          technicalTrafficPlanduringconstruction: Traffic,
          technicalItemratesofwork: Item,
          technicalMethodologyandsequenceandwork: Methodology,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/getProjectEstablishment`)
      .then((res) => {
        console.log(res.data);
        setProjectTitle(res.data.projectEstablishmentData);
      });
  }, []);

  console.log(projectId);

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
              <form onSubmit={handleSubmit}>
                <DialogTitle id="responsive-dialog-title">
                  {"General Conditions for Works"}
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
                      Basic Guidelines for Contractor
                    </Typography>
                  </Box>
                  <Textarea
                    minRows={2}
                    onChange={(e) => setBasic(e.target.value)}
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
                      Noise
                    </Typography>
                  </Box>
                  <Textarea
                    minRows={2}
                    onChange={(e) => setNoise(e.target.value)}
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
                      Embarkment Construction
                    </Typography>
                  </Box>
                  <Textarea
                    minRows={2}
                    onChange={(e) => setEmbarkment(e.target.value)}
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
                      Soil Erosion and Sedimentation Control
                    </Typography>
                  </Box>
                  <Textarea
                    minRows={2}
                    onChange={(e) => setSoil(e.target.value)}
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
                      Road safety
                    </Typography>
                  </Box>
                  <Textarea
                    minRows={2}
                    onChange={(e) => setRoad(e.target.value)}
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
                      Sanitation & Waste Disposal
                    </Typography>
                  </Box>
                  <Textarea
                    minRows={2}
                    onChange={(e) => setSanitation(e.target.value)}
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
                      Safety Guidelines
                    </Typography>
                  </Box>
                  <Textarea
                    minRows={2}
                    onChange={(e) => setSafety(e.target.value)}
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
                      Environmental Screening
                    </Typography>
                  </Box>
                  <Textarea
                    minRows={2}
                    onChange={(e) => setEnvironmental(e.target.value)}
                  />
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
                    <Textarea
                      minRows={2}
                      onChange={(e) => setIntroductions(e.target.value)}
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
                        Provisions adhered to MoRTH Specifications
                      </Typography>
                    </Box>
                    <Textarea
                      minRows={2}
                      onChange={(e) => setProvisions(e.target.value)}
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
                        Contract Drawings
                      </Typography>
                    </Box>
                    <Textarea
                      minRows={2}
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
                        Site information
                      </Typography>
                    </Box>
                    <Textarea
                      minRows={2}
                      onChange={(e) => setSite(e.target.value)}
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
                        Public Utilities
                      </Typography>
                    </Box>
                    <Textarea
                      minRows={2}
                      onChange={(e) => setPublic(e.target.value)}
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
                        Traffic Plan during construction
                      </Typography>
                    </Box>
                    <Textarea
                      minRows={2}
                      onChange={(e) => setTraffic(e.target.value)}
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
                        Item rates of work
                      </Typography>
                    </Box>
                    <Textarea
                      minRows={2}
                      onChange={(e) => setItem(e.target.value)}
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
                        Methodology and sequence and work
                      </Typography>
                    </Box>
                    <Textarea
                      minRows={2}
                      onChange={(e) => setMethodology(e.target.value)}
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

export default TechicalSpecificationForm;
