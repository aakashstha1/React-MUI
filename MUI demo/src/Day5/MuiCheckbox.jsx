import { Box, FormControlLabel, Checkbox } from "@mui/material";
import { useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
export const MuiCheckbox = () => {
  const [accept, setAccept] = useState(false);
  console.log(accept);
  const handleChange = (e) => {
    setAccept(e.target.checked);
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept the Terms and Conditions."
          control={<Checkbox checked={accept} onChange={handleChange} />}
        ></FormControlLabel>
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={accept}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControlLabel
          label="Required"
          control={<Checkbox required color="success" />}
        ></FormControlLabel>
      </Box>
      <Box>
        <FormControlLabel
          label="Disabled"
          control={<Checkbox disabled size="small" />}
        ></FormControlLabel>
      </Box>
    </Box>
  );
};
