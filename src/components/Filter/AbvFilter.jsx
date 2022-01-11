import { useEffect } from "react";
import { useContext, useState } from "react/cjs/react.development";
import { abv_gt, abv_lt, baseURL } from "../../api";
import { MainContext } from "../../contexts/MainContextProvider";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}`;
}

const abvType = {
  gt: abv_gt,
  lt: abv_lt,
  n: baseURL,
};

function AbvFilter() {
  const {
    setData,
    abvFilterType,
    setAbvFilterType,
    setAlcoholValue,
    alcoholValue,
  } = useContext(MainContext);

  const setFilterType = (type) => {
    setAbvFilterType(type);
  };

  useEffect(() => {
    let url = abvType[abvFilterType];
    url = abvFilterType === "n" ? url : url + alcoholValue;

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, [abvFilterType, alcoholValue]);

  return (
    <div className="row row-cols-auto frame">
      <button classname="btn-3 custom-btn" onClick={() => setFilterType("n")}>
        None
      </button>
      <button value={abv_gt} onClick={() => setFilterType("gt")}>
        Greater Than
      </button>
      <button value={abv_lt} onClick={() => setFilterType("lt")}>
        Lower Than
      </button>
      <Box sx={{ width: 300 }}>
        <Slider
          disabled={abvFilterType === "n" ? "disabled" : ""}
          aria-labelledby="non-linear-slider"
          value={alcoholValue}
          size="small"
          min={0}
          max={41}
          onChange={(event, value) => setAlcoholValue(value)}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          sx={{
            width: 250,
            color: "#08088A",
          }}
        />
      </Box>
    </div>
  );
}
export default AbvFilter;
