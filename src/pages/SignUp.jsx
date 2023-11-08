import React from "react";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BasicCard from "../component/BasicCard";

const SignUp = () => {
  return (
    <div>
      <div className="sub-header">
        <Typography
          sx={{ display: "flex", alignItems: "center", color: "#fff" }}
        >
          <Typography component="h1" variant="h5" sx={{ padding: "10px" }}>
            VIT
          </Typography>
          (vellore Compus)
        </Typography>
      </div>
      <div className="middle">
        <BasicCard/>
      </div>
      <div className="sub-footer">
        <Typography component="p" variant="p" sx={{ color: "white" }}>
          Copyright © 2023 Software Development Cell, VIT, Vellore-632 014.
        </Typography>
      </div>
    </div>
  );
};

export default SignUp;
