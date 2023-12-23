import React, { useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import EngineeringIcon from "@mui/icons-material/Engineering";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import { useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";

const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  backgroundColor: "#C7F6C7",
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  backgroundColor: "#C7F6C7",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});



const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Sidebar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [isCollape, setIsCollape] = React.useState(false);
  const [isDesign, setisDesign] = React.useState(false);
  const [isPreConst, setisPreConst] = React.useState(false);
  const [isConst, setisConst] = React.useState(false);
  const [isPostConst, setisPostConst] = React.useState(false);
  const [isOperation, setisOperation] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  React.useEffect(() => {
    const token = localStorage.getItem("token")
    if(!token){
      navigate("/")
    }
  }, [])

  const currentDate = new Date()
  let tokenData = localStorage.getItem("token");
  let tokenExpiry;
  let token;

  if (tokenData) {
    const currentDate = new Date();

    tokenExpiry = new Date(JSON.parse(tokenData).expiry);
    token = JSON.parse(tokenData).usertoken;
    if(tokenExpiry < currentDate){
      navigate("/")
    }
  }

  useEffect(() => {
    if (!tokenData) {
      navigate("/login");
    } else {
      if (currentDate > tokenExpiry) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
  }, []);

  const handleMenu = () => {
    setIsCollape(!isCollape);
  };

  const handleDesign = () => {
    setisDesign(!isDesign);
  };
  const handlePreConst = () => {
    setisPreConst(!isPreConst);
  };
  const handleConst = () => {
    setisConst(!isConst);
  };
  const handlePostConst = () => {
    setisPostConst(!isPostConst);
  };
  const handlOperation = () => {
    setisOperation(!isOperation);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} className="dashboard-nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Construction Mangement System
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: [2],
          }}
          className="dashboard-nav"
        >
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            sx={{ color: "white" }}
          >
            Menu
          </Typography>
          <IconButton onClick={handleDrawerOpen}>
            <ChevronLeftIcon sx={{ color: "white" }} />
          </IconButton>
        </Toolbar>
        <Divider />
        <List>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => {
              navigate("/Dashboard");
            }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        {/* <Divider /> */}
        <List disablePadding>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={handleMenu}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <FormatListBulletedIcon />
              </ListItemIcon>
              <ListItemText primary="Planning" sx={{ opacity: open ? 1 : 0 }} />
              <Typography sx={{ opacity: open ? 1 : 0 }}>
                {isCollape ? (
                  <KeyboardArrowDownIcon />
                ) : (
                  <KeyboardArrowUpIcon />
                )}
              </Typography>
            </ListItemButton>
          </ListItem>
          <Collapse in={isCollape} timeout="auto">
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                navigate("/ProjectEstablisment");
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                ></ListItemIcon>
                <ListItemText
                  primary="Project Establisment"
                  sx={{ opacity: open ? 1 : 0, fontSize: "15px" }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                navigate("/StandardForm");
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText
                  primary="Standard Form"
                  sx={{ opacity: open ? 1 : 0, fontSize: "15px" }}
                />
              </ListItemButton>
            </ListItem>
          </Collapse>
        </List>
        <List disablePadding>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={handleDesign}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <DesignServicesIcon />
              </ListItemIcon>
              <ListItemText primary="Design" sx={{ opacity: open ? 1 : 0 }} />
              <Typography sx={{ opacity: open ? 1 : 0 }}>
                {isDesign ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
              </Typography>
            </ListItemButton>
          </ListItem>
          <Collapse in={isDesign} timeout="auto">
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                navigate("/FinancialSpecification");
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText
                  primary="Financial Specification"
                  sx={{ opacity: open ? 1 : 0, fontSize: "15px" }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                navigate("/LabTesting");
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText
                  primary="Lab Testing"
                  sx={{ opacity: open ? 1 : 0, fontSize: "15px" }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                navigate("/Proposal");
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText
                  primary="Proposal"
                  sx={{ opacity: open ? 1 : 0, fontSize: "15px" }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                navigate("/TechnicalSpecification");
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText
                  primary="Technical Specification"
                  sx={{ opacity: open ? 1 : 0, fontSize: "15px" }}
                />
              </ListItemButton>
            </ListItem>
          </Collapse>
        </List>
        <List disablePadding>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={handlePreConst}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <EngineeringIcon />
              </ListItemIcon>
              <ListItemText
                primary="Pre-Construction Phase"
                sx={{ opacity: open ? 1 : 0 }}
              />
              <Typography sx={{ opacity: open ? 1 : 0 }}>
                {isPreConst ? (
                  <KeyboardArrowDownIcon />
                ) : (
                  <KeyboardArrowUpIcon />
                )}
              </Typography>
            </ListItemButton>
          </ListItem>
          <Collapse in={isPreConst} timeout="auto">
           
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                navigate("/ContractInfo");
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText
                  primary="Contract Info"
                  sx={{ opacity: open ? 1 : 0, fontSize: "15px" }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                navigate("/CostEstimation");
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText
                  primary="Cost Estimation"
                  sx={{ opacity: open ? 1 : 0, fontSize: "15px" }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                navigate("/MachineryProcurement");
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText
                  primary="Machinery Procurement"
                  sx={{ opacity: open ? 1 : 0, fontSize: "15px" }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                navigate("/MaterialProcurement");
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText
                  primary="Material Procurement"
                  sx={{ opacity: open ? 1 : 0, fontSize: "15px" }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                navigate("/SchemeticDesign");
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText
                  primary="Schemetic Design"
                  sx={{ opacity: open ? 1 : 0, fontSize: "15px" }}
                />
              </ListItemButton>
            </ListItem>
          </Collapse>
        </List>
        <List disablePadding>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={handleConst}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <EngineeringIcon />
              </ListItemIcon>
              <ListItemText
                primary="Construction Phase"
                sx={{ opacity: open ? 1 : 0 }}
              />
              <Typography sx={{ opacity: open ? 1 : 0 }}>
                {isConst ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
              </Typography>
            </ListItemButton>
          </ListItem>
          <Collapse in={isConst} timeout="auto">
            
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                navigate("/ProjectProcessUpdate");
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText
                  primary="Project Process Update"
                  sx={{ opacity: open ? 1 : 0, fontSize: "15px" }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                navigate("/SiteManagementPlan");
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText
                  primary="Site Management Plan"
                  sx={{ opacity: open ? 1 : 0, fontSize: "15px" }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                navigate("/Safetychecks");
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText
                  primary="Saftey Checks"
                  sx={{ opacity: open ? 1 : 0, fontSize: "15px" }}
                />
              </ListItemButton>
            </ListItem>
          </Collapse>
        </List>
        <List disablePadding>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={handlePostConst}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <EngineeringIcon />
              </ListItemIcon>
              <ListItemText
                primary="Post Construction"
                sx={{ opacity: open ? 1 : 0 }}
              />
              <Typography sx={{ opacity: open ? 1 : 0 }}>
                {isPostConst ? (
                  <KeyboardArrowDownIcon />
                ) : (
                  <KeyboardArrowUpIcon />
                )}
              </Typography>
            </ListItemButton>
          </ListItem>
          <Collapse in={isPostConst} timeout="auto">
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                navigate("/ProjectCompletionDocumentation");
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText
                  primary="Project Completion Documentation"
                  sx={{ opacity: open ? 1 : 0, fontSize: "15px" }}
                />
              </ListItemButton>
            </ListItem>
          </Collapse>
        </List>
        <List disablePadding>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={handlOperation}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <Diversity3Icon />
              </ListItemIcon>
              <ListItemText
                primary="Operation & Maintainance"
                sx={{ opacity: open ? 1 : 0 }}
              />
              <Typography sx={{ opacity: open ? 1 : 0 }}>
                {isOperation ? (
                  <KeyboardArrowDownIcon />
                ) : (
                  <KeyboardArrowUpIcon />
                )}
              </Typography>
            </ListItemButton>
          </ListItem>
          <Collapse in={isOperation} timeout="auto">
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                navigate("/AssetsManagement");
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText
                  primary="Assets Management"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                navigate("/MaintainanceRecord");
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText
                  primary="Maintainance Record"
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </Collapse>
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;