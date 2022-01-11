import { useState } from "react";
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

export default function CheckBoxFilter() {
  const { setData, phValue, setPhValue, srmValue, setSrmValue } =
    useContext(MainContext);

  const [checkpH, setCheckPH] = useState(false);
  const [checkSrm, setCheckSrm] = useState(false);

  const handleChangePh = (event, newValue) => {
    setPhValue(newValue);
    // setData(filtered);
  };
  const handleChangeSrm = (event, newValue) => {
    setSrmValue(newValue);
    // setData(filtered);
  };

  const pHSlider = () => {
    return (
      <Box sx={{ width: 300 }}>
        <h3>Ph: </h3>
        <Slider
          disabled={checkpH ? "" : "disabled"}
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
        <h3>SRM: </h3>
        <Slider
          disabled={checkSrm ? "" : "disabled"}
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
          onClick={() => setCheckPH(!checkpH)}
          control={<Checkbox checked={checkpH ? "checked" : ""} />}
          label={pHSlider()}
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          onClick={() => setCheckSrm(!checkSrm)}
          control={<Checkbox checked={checkSrm ? "checked" : ""} />}
          label={srmSlider()}
        />
      </FormGroup>
    </>
  );
}
