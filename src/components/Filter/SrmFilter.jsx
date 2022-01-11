import { useState } from "react";
// import Slider, { Range } from "rc-slider";
// import "rc-slider/assets/index.css";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useContext } from "react/cjs/react.development";
import { MainContext } from "../../contexts/MainContextProvider";

function valuetext(value) {
  return `${value} pH`;
}

export default function SrmFilter() {
  const { srmValue, setSrmValue } = useContext(MainContext);

  const [checkSrm, setCheckSrm] = useState(false);

  const handleChangeSrm = (event, newValue) => {
    setSrmValue(newValue);
  };

  const srmSlider = () => {
    return (
      <Box
        sx={{ width: 300 }}
        className="row d-flex flex-row align-items-center"
      >
        <Slider
          disabled={checkSrm ? "" : "disabled"}
          className="rangeslider mx-5"
          min={0}
          step={1}
          max={140}
          aria-labelledby="non-linear-slider"
          value={srmValue}
          onChange={handleChangeSrm}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          sx={{
            color: "#000",
          }}
        />
      </Box>
    );
  };

  return (
    <FormGroup>
      <label htmlFor="ph" className="h5 fw-bold">
        SRM Filter : {JSON.stringify(srmValue)}
      </label>
      <FormControlLabel
        onClick={() => {
          setCheckSrm(!checkSrm);
        }}
        control={<Checkbox checked={checkSrm ? "checked" : ""} />}
        label={srmSlider()}
      />
    </FormGroup>
  );
}
