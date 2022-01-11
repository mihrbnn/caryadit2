import { useState } from "react";
import { useContext } from "react/cjs/react.development";
import { MainContext } from "../../contexts/MainContextProvider";
//slider-checkbox

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function valuetext(value) {
  return `${value} pH`;
}

const PhFilter = () => {
  const { phValue, setPhValue } = useContext(MainContext);

  const [checkpH, setCheckPH] = useState(false);

  const handleChangePh = (event, newValue) => {
    setPhValue(newValue);
  };

  const pHSlider = () => {
    return (
      <Box sx={{ width: 300 }}>
        <Slider
          disabled={checkpH ? "" : "disabled"}
          className="ms-3 mt-2"
          label="ph"
          min={0}
          step={1}
          max={7}
          aria-labelledby="non-linear-slider"
          value={phValue}
          onChangeCommitted={handleChangePh}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          size="small"
        />
      </Box>
    );
  };

  return (
    <FormGroup>
      <label htmlFor="ph" className="h5 fw-bold mb-3">
        pH : {JSON.stringify(phValue)}
      </label>
      <FormControlLabel
        onClick={() => setCheckPH(!checkpH)}
        control={<Checkbox checked={checkpH ? "checked" : ""} />}
        label={pHSlider()}
      />
    </FormGroup>
  );
};

export default PhFilter;
