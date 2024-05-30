import { Stack, Button } from "@mui/material";
export const MuiButton = () => {
  return (
    <Stack spacing={40} direction="row">
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          text
        </Button>
        <Button variant="contained">contained</Button>
        <Button variant="outline">outline</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
      </Stack>
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
    </Stack>
  );
};
