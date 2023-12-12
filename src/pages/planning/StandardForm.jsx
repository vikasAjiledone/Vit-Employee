import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Sidebar from "../Sidebar";
import StandardFormPopup from "../../component/standardFormPopup/StandardFormPopup";
import { Document, Page } from "react-pdf";
import Pdf from "../../demo.pdf";
import { pdfjs } from "react-pdf";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

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
  const [one, setOne] = useState( );
  const [two, setTwo] = useState();
  const [three, setThree] = useState()
  const [four, setFour] = useState()
  const [five, setFive] = useState()
  const [six, setSix] = useState()
  const [seven, setSeven] = useState()
  const [eight, setEight] = useState()
  const [nine, setNine] = useState()
  const [ten, setTen] = useState()

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

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
                  <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                    <Typography variant="subtitle1" component="h6">
                      Reconnaissance Report :
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      sx={{ pl: 1, color: "red", textDecoration: "underline", cursor:"pointer" }}
                      onClick={()=> setOne(Pdf)}
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
                      sx={{ pl: 1, color: "red", textDecoration: "underline", cursor:"pointer" }}
                      onClick={()=>setTwo()}
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
                      sx={{ pl: 1, color: "red", textDecoration: "underline", cursor:"pointer" }}
                      onClick={()=>setThree()}
                    >
                      Show PDF
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{mt:3}}>
                  <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                    <Typography variant="subtitle1" component="h6">
                      Traffic Survey Analysis :
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      sx={{ pl: 1, color: "red", textDecoration: "underline", cursor:"pointer" }}
                      onClick={()=>setFour()}
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
                      sx={{ pl: 1, color: "red", textDecoration: "underline", cursor:"pointer" }}
                      onClick={()=>setFive()}
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
                      sx={{ pl: 1, color: "red", textDecoration: "underline", cursor:"pointer" }}
                      onClick={()=>setSix()}
                    >
                      Show PDF
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{mt:3}}>
                  <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                    <Typography variant="subtitle1" component="h6">
                      Soil Testing Report :
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      sx={{ pl: 1, color: "red", textDecoration: "underline", cursor:"pointer" }}
                      onClick={()=>setSeven()}
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
                      sx={{ pl: 1, color: "red", textDecoration: "underline", cursor:"pointer" }}
                      onClick={()=>setEight()}
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
                      sx={{ pl: 1, color: "red", textDecoration: "underline", cursor:"pointer" }}
                      onClick={()=>setNine()}
                    >
                      Show PDF
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{mt:3}}>
                  <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
                    <Typography variant="subtitle1" component="h6">
                      Initial cost estimation plan :
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      sx={{ pl: 1, color: "red", textDecoration: "underline", cursor:"pointer" }}
                      onClick={()=>setTen()}
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
          <Document file={one} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.apply(null, Array(numPages))
              .map((x, i) => i + 1)
              .map((page) => {
                return (
                  <Page
                    pageNumber={pageNumber}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                );
              })}
          </Document>
        </div>
      </Box>
    </Box>
  );
};

export default StandardForm;
