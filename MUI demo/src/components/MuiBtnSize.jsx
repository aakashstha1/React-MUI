import { Stack, Button } from "@mui/material;";

export const MuiBtnSize = () => {
  return (
    <Stack display="block" spacing={2} direction="row">
      <Button variant="contained" size="small">
        Small
      </Button>
      <Button variant="contained" size="medium">
        medium
      </Button>
      <Button variant="contained" size="large">
        large
      </Button>
    </Stack>
  );
};
