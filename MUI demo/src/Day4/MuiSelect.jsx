import { Box, MenuItem, Stack, TextField } from "@mui/material";
import { useState } from "react";

export const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const [foods, setFoods] = useState([]);
  console.log(country, foods);
  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  const handleChangeFood = (e) => {
    const value = e.target.value;
    setFoods(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Stack spacing={2}>
      <Box width={"250px"}>
        <TextField
          label="select country"
          select
          value={country}
          onChange={handleChange}
          fullWidth
          size="small"
          color="success"
        >
          <MenuItem value="NP">Nepal</MenuItem>
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="JP">Japan</MenuItem>
        </TextField>
      </Box>
      <Box width={"250px"}>
        <TextField
          label="select food"
          select
          fullWidth
          value={foods}
          onChange={handleChangeFood}
          SelectProps={{ multiple: true }}
          error={!foods}
          helperText="You can select multiple items"
        >
          <MenuItem value="Mo:Mo">Mo:Mo</MenuItem>
          <MenuItem value="Noodle">Noodle</MenuItem>
          <MenuItem value="Pizza">Pizza</MenuItem>
          <MenuItem value="Burger">Burger</MenuItem>
          <MenuItem value="Thakali">Thakali</MenuItem>
          <MenuItem value="Ramen">Ramen</MenuItem>
        </TextField>
      </Box>
    </Stack>
  );
};
    