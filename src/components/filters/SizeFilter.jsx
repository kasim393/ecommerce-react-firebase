import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel, FormGroup } from "@mui/material";

const SizeFilter = ({ size, changesizeChecked }) => {
  const { checked, label, id } = size;
  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                color: `#000`,

                "&.Mui-checked": {
                  color: `#000`,
                },
              }}
              checked={checked}
              onChange={() => changesizeChecked(id)}
            />
          }
          label={`${label.toUpperCase()}`}
        />
      </FormGroup>
    </div>
  );
};

export default SizeFilter;
