import { Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

const TypeWriting = () => {
  return (
    <Typography
      variant="h4"
      type="left"
      align="center"
      color="#FB8500"
      fontFamily="Modak"
      noWrap
    >
      <TypeAnimation
        sequence={[
          "Beyond the Typical Newsletter!",
          7000,
          "Uniquely Yours, Every Day!",
          7000,
          "Privacy Being Paramount!",
          7000,
          "Your Daily Guru!",
          7000,
        ]}
        speed={50}
        repeat={Infinity}
        style={{ font: "Modak", fontSize: "1em" }}
      />
    </Typography>
  );
};

export default TypeWriting;
