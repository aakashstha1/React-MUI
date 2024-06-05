import { Stack, Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
export const MuiRating = () => {
  const [value, setValue] = useState(0);
  console.log({ value });
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Stack spacing={2}>
      <Rating value={value} onChange={handleChange} />
      <Rating
        size="large"
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
      <Rating disabled />
    </Stack>
  );
};
