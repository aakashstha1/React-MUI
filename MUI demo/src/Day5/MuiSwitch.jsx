import { Box, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";
export const MuiSwitch = () => {
  const [checked, setChecked] = useState();
  console.log(checked);
  const handleChange = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="Dark mode"
          control={<Switch color="error" />}
          cheked={checked}
          onChange={handleChange}
        />
      </Box>

      <Box>
        <FormControlLabel
          label="Required"
          control={<Switch color="secondary" required />}
        />
      </Box>
      <Box>
        <FormControlLabel
          label="Disabled"
          control={<Switch disabled size="small" />}
        />
      </Box>
    </Box>
  );
};
