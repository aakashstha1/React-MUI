import { Stack, Button, ButtonGroup } from "@mui/material";

export const MuiBtnGroup = () => {
  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={3}>
        <ButtonGroup>
          <Button variant="contained">Left</Button>
          <Button variant="contained">Center</Button>
          <Button variant="contained">Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction={"row"} spacing={3}>
        <ButtonGroup>
          <Button variant="outlined">Left</Button>
          <Button variant="outlined">Center</Button>
          <Button variant="outlined">Right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};
