import React from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LightModeIcon from "@mui/icons-material/LightMode";

import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import { useAtom } from "jotai";
import {
  userNameAtom,
  finishedOnboardingAtom,
  preferenceDataAtom,
  defaultPreferenceData,
} from "./atom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://everyday-newsletter.vercel.app">
        DailyDive
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#FB8500",
    },
    secondary: {
      main: "#023047",
    },
  },
});

export default function App(props) {
  // eslint-disable-next-line
  const [userName, setUserName] = useAtom(userNameAtom);
  // eslint-disable-next-line
  const [_finishedOnboarding, setFinishedOnboarding] = useAtom(
    finishedOnboardingAtom,
  );
  // eslint-disable-next-line
  const [_preferenceData, setPreferenceData] = useAtom(preferenceDataAtom);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutUser = () => {
    setUserName("");
    setPreferenceData(defaultPreferenceData);
    setFinishedOnboarding(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" elevation={0}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            color: "white",
          }}
        >
          <Typography
            variant="h5"
            color="inherit"
            className="flex items-end !font-[modak]"
            noWrap
          >
            <LightModeIcon fontSize={"large"} className="mr-3" />
            DailyDive
          </Typography>
          <div>
            <Button
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{
                color: "white",
                textTransform: "initial",
                fontSize: "1rem",
              }}
            >
              {userName}
              <span className="ml-2 text-4xl">
                <AccountCircleIcon className="text-white" fontSize="inherit" />
              </span>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={() => {
                  logoutUser();
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>

      {/* Main page content */}
      <main>{props.children}</main>

      <Box sx={{ p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Created at Hack The North 2023!
        </Typography>
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}
