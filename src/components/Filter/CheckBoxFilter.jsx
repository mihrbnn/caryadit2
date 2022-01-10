import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function valuetext(value) {
  return `${value} pH`;
}

export default function CheckBoxFilter() {
  const [phValue, setPhValue] = useState([0, 7]);
  const [srmValue, setSrmValue] = useState([0]);
  const [check, setCheck] = useState(false);

  const handleChangePh = (event, newValue) => {
    setPhValue(newValue);
  };
  const handleChangeSrm = (event, newValue) => {
    setSrmValue(newValue);
  };

  const pHSlider = () => {
    return (
      <Box sx={{ width: 300 }}>
        <Slider
          disabled={check ? "" : "disabled"}
          className="rangeslider"
          min={0}
          step={1}
          max={7}
          aria-labelledby="non-linear-slider"
          value={phValue}
          onChange={handleChangePh}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          sx={{
            width: 300,
            color: "#000",
          }}
        />
      </Box>
    );
  };

  const srmSlider = () => {
    return (
      <Box sx={{ width: 300 }}>
        <Slider
          disabled={check ? "" : "disabled"}
          className="rangeslider"
          min={0}
          step={1}
          max={140}
          aria-labelledby="non-linear-slider"
          value={srmValue}
          onChange={handleChangeSrm}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          sx={{
            width: 300,
            color: "#000",
          }}
        />
      </Box>
    );
  };

  return (
    <>
      <FormGroup>
        <FormControlLabel
          onClick={() => setCheck(!check)}
          control={<Checkbox checked={check ? "checked" : ""} />}
          label={pHSlider()}
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          onClick={() => setCheck(!check)}
          control={<Checkbox checked={check ? "checked" : ""} />}
          label={srmSlider()}
        />
      </FormGroup>
    </>
  );
}
