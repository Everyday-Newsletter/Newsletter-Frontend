import { Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

const TypeWriting = () => {
  return (
    <Typography variant="h4" type="left">
      <TypeAnimation
        sequence={[
          "Beyond the Typical Newsletter!",
          1000,
          "Uniquely Yours, Every Day!",
          1000,
          "Your Daily Guru!",
          1000,
        ]}
        speed={50}
        repeat={Infinity}
        style={{ fontSize: "1em" }}
      />
    </Typography>
  );
};

export default TypeWriting;
