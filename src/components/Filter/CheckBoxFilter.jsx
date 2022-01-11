import { useState } from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

// import Box from "@mui/material/Box";
// import Slider from "@mui/material/Slider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useContext } from "react/cjs/react.development";
import { MainContext } from "../../contexts/MainContextProvider";

// function valuetext(value) {
//   return `${value} pH`;
// }

export default function CheckBoxFilter() {
  const { setPhValue, srmValue, setSrmValue } = useContext(MainContext);

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
  // const Slider = require("rc-slider");
  // const createSliderWithTooltip = Slider.createSliderWithTooltip;
  // const Range = createSliderWithTooltip(Slider.Range);

  const pHSlider = () => {
    return (
      <Range
        disabled={checkpH ? "" : "disabled"}
        className="rangeslider"
        count={3}
        defaultValue={[20, 40, 60, 80]}
        pushable
        trackStyle={[{ backgroundColor: "red" }, { backgroundColor: "green" }]}
        handleStyle={[
          { backgroundColor: "yellow" },
          { backgroundColor: "gray" },
        ]}
        railStyle={{ backgroundColor: "black" }}
        min={0}
        step={0.1}
        max={7}
        // aria-labelledby="non-linear-slider"
        // value={phValue}
        onChange={handleChangePh}
        // valueLabelDisplay="auto"
        // getAriaValueText={valuetext}
        // sx={{
        //   width: 250,
        //   color: "#0A0A2A",
        // }}
      />
    );
  };

  const srmSlider = () => {
    return (
      <Slider
        disabled={checkSrm ? "" : "disabled"}
        className="rangeslider"
        count={3}
        defaultValue={[20, 40, 60, 80]}
        // min={0}
        // step={1}
        // max={140}
        // aria-labelledby="non-linear-slider"
        value={srmValue}
        onChange={handleChangeSrm}
        // valueLabelDisplay="auto"
        // getAriaValueText={valuetext}
        // sx={{
        //   width: 300,
        //   color: "#000",
        // }}
      />
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
