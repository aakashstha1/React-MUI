import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
const skills = ["HTML", "CSS", "JS", "REACT", "NODE"];

export const MuiAutocomplete = () => {
  const [value, setValue] = useState(null);
  console.log({ value });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={4} width={300}>
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={handleChange}
        freeSolo
      />
    </Stack>
  );
};
