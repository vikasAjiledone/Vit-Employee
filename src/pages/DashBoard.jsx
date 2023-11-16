import React from "react";
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

const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

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

const DashBoard = () => {
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

  //   const handleDrawerClose = () => {
  //     setOpen(false);
  //   };

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
        {/* <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
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
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
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
              {isCollape ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </ListItemButton>
          </ListItem>
          <Collapse in={isCollape} timeout="auto">
            {["Project Establishment", "Standard Forms &Guidelines"].map(
              (text, index) => (
                <ListItem key={text} disablePadding sx={{ display: "block" }}>
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
                      primary={text}
                      sx={{ opacity: open ? 1 : 0, fontSize: "15px" }}
                    />
                  </ListItemButton>
                </ListItem>
              )
            )}
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
              {isDesign ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </ListItemButton>
          </ListItem>
          <Collapse in={isDesign} timeout="auto">
            {[
              "Request For Proposal",
              "Technical Specification",
              "Financial Specification",
              "Lab & In-Situ Testing",
            ].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
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
                    primary={text}
                    sx={{ opacity: open ? 1 : 0, fontSize: "15px" }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
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
              {isPreConst ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </ListItemButton>
          </ListItem>
          <Collapse in={isPreConst} timeout="auto">
            {[
              "Contract Information",
              "Contractor Details",
              "Schematic Designs",
              "Cost Estimation",
              "Material Procurement",
              "Machinery Procurement",
            ].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
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
                    primary={text}
                    sx={{ opacity: open ? 1 : 0, fontSize: "15px" }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
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
              {isConst ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </ListItemButton>
          </ListItem>
          <Collapse in={isConst} timeout="auto">
            {[
              "Site Management Plan",
              "Project Progress Update",
              "Financial Specification",
              "Inventory Status",
            ].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
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
                    primary={text}
                    sx={{ opacity: open ? 1 : 0, fontSize: "15px" }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
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
              {isPostConst ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </ListItemButton>
          </ListItem>
          <Collapse in={isPostConst} timeout="auto">
            {["Project Completion Documentation"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
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
                    primary={text}
                    sx={{ opacity: open ? 1 : 0, fontSize: "15px" }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
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
              {isOperation ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </ListItemButton>
          </ListItem>
          <Collapse in={isOperation} timeout="auto">
            {["Assets Management", "Maintenance Record"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block"}}>
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
                    primary={text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </Collapse>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
};

export default DashBoard;
