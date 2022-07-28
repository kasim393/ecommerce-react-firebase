import React from "react";
import { FiSearch } from "react-icons/fi";
import "./filters.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const SearchBar = ({ value, changeInput }) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="filter_search_input">
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={changeInput}
      />
      <FiSearch className="search_icon" />
      {/* <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl> */}
    </div>
  );
};

export default SearchBar;
