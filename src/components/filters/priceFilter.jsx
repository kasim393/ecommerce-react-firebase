import React from "react";
import Slider from "@mui/material/Slider";

const PriceFilter = ({ value, changePrice }) => {
  return (
    <Slider
      value={value}
      onChange={changePrice}
      valueLabelDisplay="on"
      min={10}
      max={1000}
      step={50}
    />
  );
};

export default PriceFilter;
