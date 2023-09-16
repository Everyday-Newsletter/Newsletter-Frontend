import React from "react";

import AppBar from "@mui/material/AppBar";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://everyday-newsletter.vercel.app">
        Everyday Newsletter
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default function App() {
  const [loading, setLoading] = React.useState(false);

  const formSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

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

      <main>
        <Container maxWidth="sm">
          <Stack
            component="form"
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
            onSubmit={formSubmit}
          >
            <TextField
              id="outlined-basic"
              label="How are you today?"
              name="feelings"
              variant="outlined"
              required
            />
            <Button variant="contained" type="submit" disabled={loading}>
              {loading ? (
                <CircularProgress color="inherit" size={30} />
              ) : (
                <SendIcon />
              )}
            </Button>
          </Stack>
        </Container>
      </main>

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
