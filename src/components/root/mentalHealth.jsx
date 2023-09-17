import React from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function MentalHealth() {
  const [loading, setLoading] = React.useState(false);
  const [response, setResponse] = React.useState("");

  const formSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setResponse(
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      );
    }, 2000);
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
    </Stack>
  );
}
