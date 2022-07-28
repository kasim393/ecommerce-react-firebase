import React from "react";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 30,
  height: 30,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "transparent",
  border: "none !important",

  "&:before": {
    borderRadius: "50%",
    width: 20,
    height: 20,

    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "transparent",
  },
});

const ColorFilter = ({ changeChecked, color }) => {
  const { checked, label, id, code } = color;
  return (
    <div>
      <Checkbox
        sx={{
          color: `${code}`,
          borderRadius: "50%",
          bgcolor: `${code}`,
          width: 30,
          height: 30,
          "&.Mui-checked": {
            color: `#fff`,
            bgcolor: `${code}`,
            border: "1px solid #000",
          },
          "&:hover": { bgcolor: `${code}`, border: "1px solid #000" },
        }}
        checkedIcon={<BpCheckedIcon />}
        onChange={() => changeChecked(id)}
        checked={checked}
        title={label}
      />
    </div>
  );
};

export default ColorFilter;
