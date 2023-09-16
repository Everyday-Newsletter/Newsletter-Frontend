import React from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Newsletter() {
  const curDate = new Date()
  const [loading, setLoading] = React.useState(false);
  const checkTime = (date) => {
    const hours = date.getHours()
    if(hours >= 0 && hours < 12){
      return ("Good Morning! :D")
    } else if(hours < 17){
      return ("Good Afternoon! :D")
    } else {
      return("Good Night! :D")
    }
  }


  const formSubmit = (/* event */) => {
    // console.log(event);
    // event.preventDefault();
    setLoading(true);

    // setTimeout(() => {
    // setLoading(false);
    // }, 2000);
  };

  return (
    <>
      <Container maxWidth="sm">
        <Typography variant="h3" align="center" color="inherit" noWrap>
          {checkTime(curDate)}
        </Typography>
        <Stack
          component="form"
          action="/newsletter"
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
            fullWidth
            variant="outlined"
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
    </>
  );
}
