import { Stack, Box, FormControl,FormLabel,FormControlLabel,RadioGroup,Radio,
} from "@mui/material";
import { useState } from "react";
export const MuiRadioBtn = () => {
  const [gender, setGender] = useState("");
  console.log(gender);
  const handleChange = (e) => {
    setGender(e.target.value);
  };
  return (
    <Stack spacing={10}>
      <Box>
        <FormControl>
          <FormLabel id="job-experience-group-label">
            Year of experiences
          </FormLabel>
          <RadioGroup
            name="job-experience-group"
            aria-labelledby="job-experience-group-label">
            <FormControlLabel control={<Radio />} label="0-2" value={"0-2"} />
            <FormControlLabel control={<Radio />} label="3-5" value={"3-5"} />
            <FormControlLabel control={<Radio />} label="6-8" value={"6-8"} />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          <FormLabel id="gender-group-label">Gender</FormLabel>

          <RadioGroup
            name="gender-group"
            row
            aria-labelledby="gender-group-label"
            value={gender}
            onChange={handleChange}
          >
            <FormControlLabel control={<Radio size="small" color="secondary" />}
              label="Female"
              value={"Female"} />
            <FormControlLabel control={<Radio size="small" color="success" />}
              label="Male"
              value={"Male"} />
            <FormControlLabel control={<Radio size="small" color="warning" />}
              label="Other"
              value={"Other"}/>
            <FormControlLabel
              control={<Radio size="small" />}
              label="disabled"
              value={"disabled"}
              disabled/>
          </RadioGroup>
        </FormControl>
      </Box>
    </Stack>
  );
};
