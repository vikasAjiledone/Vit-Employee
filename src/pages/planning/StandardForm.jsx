/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Sidebar from "../Sidebar";
import StandardFormPopup from "../../component/standardFormPopup/StandardFormPopup";
import { Document, Page } from "react-pdf";
// import Pdf from "../../demo.pdf";
import { pdfjs } from "react-pdf";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const StandardForm = () => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [projectTitle, setProjectTitle] = useState();
  const [projectId, setProjectID] = useState();
  const [data, setData] = useState();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/getProjectEstablishment`)
      .then((res) => {
        setProjectTitle(res.data.projectEstablishmentData);
      });
  }, []);

  const selectedId = async (id) => {
    try {
      axios({
        method: "GET",
        url: `http://localhost:3000/api/getSingleProjectEstablishment?projectId=${id}`,
      }).then((res) => {
        console.log(res.data.projectEstablishmentData);
        setData(res.data.projectEstablishmentData);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const showPdf = (pdfUrl) => {
    let updatedString = pdfUrl.replace(/\\/g, "/");

    let uploadsIndex = updatedString.indexOf("/uploads");

    let substring = updatedString.substring(uploadsIndex);

    let outputString = "http://localhost:3000" + substring;

    setSelectedPdf(outputString);
  };

  console.log(projectId);

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: "whitesmoke" }}
      >
        <DrawerHeader />
        <Typography variant="h6">Standard Form</Typography>
        <Box sx={{ display: "flex", alignItems: "center", my: 3 }}>
          <StandardFormPopup />
        </Box>
        <Box>
          <Card sx={{ minWidth: 275, mt: 3 }}>
            <CardContent>
              <Box>
                <Box>
                  <Box sx={{ py: 0, px: 0 }}>
                    <InputLabel id="simple-select-label">Project ID</InputLabel>
                    <Select
                      sx={{
                        width: "100%",
                        height: 50,
                      }}
                      onChange={(e) => {
                        setProjectID(e.target.value);
                        selectedId(e.target.value);
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
                  <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                    <Typography variant="subtitle1" component="h6">
                      Reconnaissance Report :
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      sx={{
                        pl: 1,
                        color: "red",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        showPdf(data?.StandardForm?.ReconnaissanceReport)
                      }
                    >
                      Show PDF
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                    <Typography variant="subtitle1" component="h6">
                      Topographic Survey Report :
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      sx={{
                        pl: 1,
                        color: "red",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        showPdf(data?.StandardForm?.TopographicSurveyReport)
                      }
                    >
                      Show PDF
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                    <Typography variant="subtitle1" component="h6">
                      Layout Plans :
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      sx={{
                        pl: 1,
                        color: "red",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      onClick={() => showPdf(data?.StandardForm?.LayoutPlans)}
                    >
                      Show PDF
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ mt: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                    <Typography variant="subtitle1" component="h6">
                      Traffic Survey Analysis :
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      sx={{
                        pl: 1,
                        color: "red",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        showPdf(data?.StandardForm?.TrafficSurveyAnalysis)
                      }
                    >
                      Show PDF
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                    <Typography variant="subtitle1" component="h6">
                      Forest clearance Forms :
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      sx={{
                        pl: 1,
                        color: "red",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        showPdf(data?.StandardForm?.ForestclearanceForms)
                      }
                    >
                      Show PDF
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                    <Typography variant="subtitle1" component="h6">
                      Technical Requirement Report :
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      sx={{
                        pl: 1,
                        color: "red",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        showPdf(data?.StandardForm?.TechnicalRequirementReport)
                      }
                    >
                      Show PDF
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ mt: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                    <Typography variant="subtitle1" component="h6">
                      Soil Testing Report :
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      sx={{
                        pl: 1,
                        color: "red",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        showPdf(data?.StandardForm?.SoilTestingReport)
                      }
                    >
                      Show PDF
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                    <Typography variant="subtitle1" component="h6">
                      Socio Economic Profile :
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      sx={{
                        pl: 1,
                        color: "red",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        showPdf(data?.StandardForm?.SocioEconomicProfile)
                      }
                    >
                      Show PDF
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                    <Typography variant="subtitle1" component="h6">
                      Built Environment layout :
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      sx={{
                        pl: 1,
                        color: "red",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        showPdf(data?.StandardForm?.BuiltEnvironmentlayout)
                      }
                    >
                      Show PDF
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ mt: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                    <Typography variant="subtitle1" component="h6">
                      Initial cost estimation plan :
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      sx={{
                        pl: 1,
                        color: "red",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        showPdf(data?.StandardForm?.Initialcostestimationplan)
                      }
                    >
                      Show PDF
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
        <div className="pdf-div">
          <p>
            Page {pageNumber} of {numPages}
          </p>
          {selectedPdf && (
            <Document
              file={{ url: selectedPdf }}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              {Array.apply(null, Array(numPages))
                .map((x, i) => i + 1)
                .map((page) => {
                  return (
                    <Page
                      key={page}
                      pageNumber={pageNumber}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                    />
                  );
                })}
            </Document>
          )}
        </div>
      </Box>
    </Box>
  );
};

export default StandardForm;
