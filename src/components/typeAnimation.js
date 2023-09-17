import { Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

const TypeWriting = () => {
  return (
    <Typography variant="h4" type="left" align="center" color="inherit" noWrap>
      <TypeAnimation
        sequence={[
          "Beyond the Typical Newsletter!",
          10000,
          "Uniquely Yours, Every Day!",
          10000,
          "Privacy Being Paramount!",
          10000,
          "Your Daily Guru!",
          10000,
        ]}
        speed={50}
        repeat={Infinity}
        style={{ fontSize: "1em" }}
      />
    </Typography>
  );
};

export default TypeWriting;
