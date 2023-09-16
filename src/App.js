import React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";

const Copyright = () => {
  const todayDate = new Date()
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://everyday-newsletter.vercel.app">
        Everyday Newsletter
      </Link>{" "}
      {todayDate.getFullYear()}
      {"."}
    </Typography>
  );
};

export default function App(props) {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Everyday Newsletter
          </Typography>
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
          Created at Hack The North!
        </Typography>
        <Copyright />
      </Box>
    </>
  );
}
