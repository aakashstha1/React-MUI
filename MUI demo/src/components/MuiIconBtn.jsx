import { Stack, Button, IconButton, ButtonGroup } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
export const MuiIconBtn = () => {
  return (
    <Stack spacing={5}>
      <Stack display={"block"} spacing={2} direction={"row"}>
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          disableRipple
          onClick={() => {
            alert("Clicked");
          }}
        >
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        <IconButton aria-label="send" color="success" size="medium">
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction={"row"} spacing={3}>
        <ButtonGroup variant="text" orientation="vertical">
          <Button variant="outlined">Left</Button>
          <Button variant="outlined">Center</Button>
          <Button variant="outlined">Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction={"row"} spacing={3}>
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          color="secondary"
          aria-label="allignment button group"
        >
          <Button
            onClick={() => {
              alert("Clicked Left");
            }}
          >
            Left
          </Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};
