import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Textarea from "@mui/joy/Textarea";
import TextField from "@mui/material/TextField";
import PersonIcon from "@mui/icons-material/Person";
import VisibilityIcon from "@mui/icons-material/Visibility";
import RefreshIcon from "@mui/icons-material/Refresh";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Alert,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
} from "@mui/material";

const BasicCard = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const randomString = Math.random().toString(36).slice(8);
  const [captcha, setCaptcha] = useState(randomString);

  const refreshString = () => {
    // setText("");
    setCaptcha(Math.random().toString(36).slice(8));
    console.log(Math.random().toString(36).slice(8));
  };

  return (
    <div className="basic-card">
      <Box
        sx={{
          boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
        }}
      >
        <Typography
          sx={{
            borderWidth: "3px 0px 0px 0px",
            borderStyle: "solid",
            borderColor: "rgb(52, 219, 116) 52%",
          }}
        ></Typography>
        <Typography
          component="h2"
          variant="h5"
          sx={{ backgroundColor: "whitesmoke", py: 1, px: 2 }}
        >
           Login
        </Typography>
        <Typography sx={{ p: 3 }}>
          <Box
            sx={{
              py: 1,
              px: 7,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              name="Outlined"
              placeholder="Username"
              variant="outlined"
              size="small"
              sx={{ width: "100%" }}
            />
            <Typography
              sx={{
                backgroundColor: "whitesmoke",
                p: 1,
              }}
            >
              <PersonIcon
                sx={{ color: "blue", fontSize: "17px", cursor: "pointer" }}
              />
            </Typography>
          </Box>
          <Box
            sx={{
              py: 1,
              px: 7,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              name="Outlined"
              placeholder="Password"
              variant="outlined"
              size="small"
              type={passwordType}
              onChange={handlePasswordChange}
              value={passwordInput}
              sx={{ width: "100%" }}
            />
            <Typography
              sx={{
                backgroundColor: "whitesmoke",
                p: 1,
              }}
            >
              <Typography className="" onClick={togglePassword}>
                {passwordType === "password" ? (
                  <VisibilityOffIcon
                    sx={{ color: "red", fontSize: "17px", cursor: "pointer" }}
                  />
                ) : (
                  <VisibilityIcon
                    sx={{ color: "red", fontSize: "17px", cursor: "pointer" }}
                  />
                )}
              </Typography>
            </Typography>
          </Box>
          {/* <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <div className="h3">{captcha}</div>
            <Button
              startIcon={<RefreshIcon />}
              onClick={() => refreshString()}
              className="chaptcha-btn"
            ></Button>
          </CardActions>
          <Box
            sx={{
              py: 2,
              px: 7,
            }}
          >
            <TextField
              name="Outlined"
              placeholder="Enter CAPTCHA shown above"
              variant="outlined"
              size="small"
              sx={{ width: "100%" }}
            />
          </Box> */}
          <Typography
            component="h2"
            variant="h5"
            sx={{ py: 1, px: 2, display: "flex", justifyContent: "center" }}
          >
            <Button variant="contained">Submit</Button>
          </Typography>
        </Typography>
        <Typography sx={{ backgroundColor: "whitesmoke", py: 1, px: 2 }}>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography>
              <Typography>
                <Link
                  href="#"
                  underline="none"
                  sx={{ fontSize: "13px", fontWeight: 700 }}
                >
                  {"Forgot Password"}
                </Link>
              </Typography>
              <Typography>
                <Link
                  href="#"
                  underline="none"
                  sx={{ fontSize: "13px", fontWeight: 700 }}
                >
                  {"Forgot LoginId"}
                </Link>
              </Typography>
            </Typography>
            <Typography>
              <Link
                href="#"
                underline="always"
                sx={{ fontSize: "12px", fontWeight: 700, color: "forestgreen" }}
              >
                <i>{"Go to Home Page"}</i>
              </Link>
            </Typography>
          </Typography>
        </Typography>
      </Box>
    </div>
  );
};

export default BasicCard;
