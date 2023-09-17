import React from "react";
import axios from "axios";

import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function MentalHealth() {
  const [loading, setLoading] = React.useState(false);
  const [response, setResponse] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [error, setError] = React.useState("");

  const formSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    axios
      .get(
        `${process.env.REACT_APP_API_ENDPOINT}/mental_health?message=${message}`,
      )
      .then((response) => {
        setResponse(response.data);
      })
      .catch((error) => {
        setError(`Error fetching data: ${error}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return response ? (
    <div className="mt-8">
      <Typography className="bg-[#FB8500] text-white p-4 rounded-xl">
        {response}
      </Typography>
    </div>
  ) : (
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
        fullWidth
        variant="outlined"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        value={message}
      />
      <Button
        variant="contained"
        type="submit"
        disabled={loading}
        className="bg-secondary"
      >
        {loading ? (
          <CircularProgress color="inherit" size={30} />
        ) : (
          <SendIcon sx={{ color: "white" }} />
        )}
      </Button>
      {error ? error : <></>}
    </Stack>
  );
}
