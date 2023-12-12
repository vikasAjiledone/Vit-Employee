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
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

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
    const formData = new FormData();
    formData.append("Basic", Basic);
    formData.append("Noise", Noise);
    formData.append("Embarkment", Embarkment);
    formData.append("Soil", Soil);
    formData.append("Road", Road);
    formData.append("Sanitation", Sanitation);
    formData.append("Safety", Safety);
    formData.append("Environmental", Environmental);
    formData.append("Introductions", Introductions);
    formData.append("Provisions", Provisions);
    formData.append("Contract", Contract);
    formData.append("Site", Site);
    formData.append("Public", Public);
    formData.append("Traffic", Traffic);
    formData.append("Item", Item);
    formData.append("Methodology", Methodology);

    console.log(
      Basic,
      Noise,
      Embarkment,
      Soil,
      Road,
      Sanitation,
      Safety,
      Environmental,
      Introductions,
      Provisions,
      Contract,
      Site,
      Public,
      Traffic,
      Item,
      Methodology
    );
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
              <form onSubmit={handleSubmit}>
                <DialogTitle id="responsive-dialog-title">
                  {"General Conditions for Works"}
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
