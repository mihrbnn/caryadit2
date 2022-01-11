import { useEffect, useContext, useState } from "react";
import { abv_gt, abv_lt, baseURL } from "../../api";
import { MainContext } from "../../contexts/MainContextProvider";
import "../../index.css";

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
    <div>
      <label htmlFor="alcoholValue" className="h5 fw-bold mb-3">
        Alcohol by volume : {JSON.stringify(alcoholValue)}
      </label>
      <div className="row row-cols-auto mb-3">
        <button
          className={
            `btn border button-border p-2 rounded ` +
            (abvFilterType === "n" ? "button-bg  text-light" : "")
          }
          onClick={() => setFilterType("n")}
        >
          None
        </button>
        <button
          className={
            `btn border button-border mx-2 p-2 rounded ` +
            (abvFilterType === "gt" ? "button-bg  text-light" : "")
          }
          value={abv_gt}
          onClick={() => setFilterType("gt")}
        >
          Greater Than
        </button>
        <button
          className={
            `btn border button-border p-2 rounded ` +
            (abvFilterType === "lt" ? "button-bg  text-light" : "")
          }
          value={abv_lt}
          onClick={() => setFilterType("lt")}
        >
          Lower Than
        </button>
      </div>
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
        />
      </Box>
    </div>
  );
}
export default AbvFilter;
