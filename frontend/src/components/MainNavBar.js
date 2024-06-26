import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Drawer,
  Box,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import GreenTopBanner from "../assets/GreenTopBanner.png";
// import LeftImage from "../assets/pngwing.com.png"; // Import your left image
// import RightImage from "../assets/pngwing.com.png"; // Import your right image
// import navbg from "../assets/navbg.png"; // Import your right image

const navItem = [
  { label: "Games", path: "/games" },
  { label: "Results", path: "/results" },
  { label: "Standings", path: "/standings" },
  { label: "Stats", path: "/stats" },
  { label: "Shares", path: "/share" },
  { label: "Admin", path: "/admin" },
  // { label: "Teams", path: "/teams" },
  // { label: "Pools", path: "/pools" },
  // { label: "FB Challenge", path: "/fb-challenges" },
  // { label: "Records", path: "/records" },
];

const MainNavBar = () => {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isUserAdmin, setIsUserAdmin] = useState(false);

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    try {
      setIsUserAdmin(JSON.parse(isAdmin));
    } catch (error) {
      console.error("Error parsing isAdmin:", error);
    }
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <AppBar
        position="static"
        className="bg-1E1E1E"
        style={{
          backgroundSize: "cover",
          backgroundColor: "transparent",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#1B1C21",
            padding: "2%",
          }}
        >
          <Box sx={{ width: "60vh" }}>
            {" "}
            {/* <img src={LeftImage} alt="Left Image" /> */}
          </Box>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleNav}
            sx={{ display: { md: "none" } }}
          >
            {isNavOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <List
            component="nav"
            aria-labelledby="main navigation"
            sx={{
              display: { xs: "none", md: "flex" },
              // borderColor: "gray",
              // borderWidth: "1px",
              // borderStyle: "solid",
              backgroundColor: "black",
              borderRadius: "4vh",
              width: "150vh",
            }}
          >
            {navItem.map((item, index) => {
              if (item.label === "Admin" && !isUserAdmin) {
                return null;
              }
              return (
                <ListItem
                  key={index}
                  button
                  component={NavLink}
                  to={item.path}
                  selected={location.pathname === item.path}
                  sx={{
                    transition:
                      "transform 0.3s ease, background-color 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                      // backgroundColor: "#333333", // Unique hover effect
                    },
                    "&.Mui-selected": {
                      color: "#FF0000 !important",
                      transform: "scale(1.05)",
                      backgroundColor: "transparent !important",
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        marginleft: "3%",
                        marginTop: "20%",
                        width: "50%",
                        height: "2px",
                        backgroundColor: "#FF0000",
                      },
                    },
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItem>
              );
            })}
          </List>
          <Box sx={{ width: "60vh" }}>
            {" "}
            {/* <img src={RightImage} alt="Right Image" />{" "} */}
          </Box>{" "}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={isNavOpen}
        onClose={toggleNav}
        ModalProps={{ keepMounted: true }}
      >
        <List>
          {navItem.map((item, index) => {
            if (item.label === "Admin" && !isUserAdmin) {
              return null;
            }
            return (
              <ListItem
                key={index}
                button
                component={NavLink}
                to={item.path}
                onClick={toggleNav}
                selected={location.pathname === item.path}
                sx={{
                  transition: "transform 0.3s ease, background-color 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                    backgroundColor: "#333333",
                  },
                  "&.Mui-selected": {
                    color: "white",
                    transform: "scale(1.05)",
                    backgroundColor: "transparent !important",
                  },
                }}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  );
};

export default MainNavBar;
