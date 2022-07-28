import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled } from "@mui/material/styles";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  width: "100%",
  justifyContent: "space-between",
  display: "flex",
  flexDirection: "column",

  gap: theme.spacing(2),
}));
const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  fontFamily: `'Raleway', sans-serif`,
  fontSize: ".8rem",
  border: "none",
  textAlign: "left !important",
  fontWeight: "bold",
  "&.Mui-selected": {
    borderRadius: "0px",
    background: "#212121",
    boxShadow: "0px 4px 35px rgba(0, 0, 0, 0.15)",
    color: "#fff",
  },
  "&.MuiToggleButton-root": {
    "&:hover": {
      background: "#212121",
      color: "#fff",
      borderRadius: "0px",
    },
  },
}));

const FilterListToggle = ({ options, value, selectToggle }) => {
  return (
    <StyledToggleButtonGroup value={value} exclusive onChange={selectToggle}>
      {options.map(({ id, value }) => (
        <StyledToggleButton key={id} value={value}>
          {value}
        </StyledToggleButton>
      ))}
    </StyledToggleButtonGroup>
  );
};

export default FilterListToggle;
