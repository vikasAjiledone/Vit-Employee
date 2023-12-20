import React, { useState, useEffect } from "react";
import Sidebar from "../../pages/Sidebar";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import axios from "axios";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const ProposalView = () => {
  const [projectTitle, setProjectTitle] = useState();
  const [projectId, setProjectID] = useState();
  const [data, setData] = useState();
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedPdf, setSelectedPdf] = useState(null);

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
        console.log(res.data?.projectEstablishmentData?.Proposal);
        setData(res.data?.projectEstablishmentData?.Proposal);
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

  return (
    <Box sx={{ width: "100%" }}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "whitesmoke",
          height: "100vh",
        }}
      >
        <DrawerHeader />
        <Typography variant="h6" sx={{ textDecoration: "underline" }}>
          Proposal Overview
        </Typography>
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
        {data ? (
          <Card sx={{ minWidth: 275, mt: 3 }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                <Typography variant="h6">Proejct Title :</Typography>
                <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                  {data.ProjectTitle}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                <Typography variant="h6">Project Description :</Typography>
                <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                  {data.ProjectDescription}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                <Typography variant="h6">Contact Person :</Typography>
                <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                  {data.ContactPerson}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                <Typography variant="h6">Information for Bidding :</Typography>
                <Typography variant="subtitle1" component="h6" sx={{ pl: 1 }}>
                  {data.InformationforBidding}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                <Typography variant="h6">Tender Notice :</Typography>
                <Typography
                  variant="subtitle1"
                  component="h6"
                  sx={{
                    pl: 1,
                    color: "red",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={() => showPdf(data?.TenderNotice)}
                >
                  Show PDF
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ) : (
          <Typography variant="h6" sx={{ pt: 3, textAlign: "center" }}>
            No Data
          </Typography>
        )}
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
  );
};

export default ProposalView;
