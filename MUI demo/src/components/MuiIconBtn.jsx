import { Stack, Button, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
export const MuiIconBtn = () => {
  return (
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
  );
};
