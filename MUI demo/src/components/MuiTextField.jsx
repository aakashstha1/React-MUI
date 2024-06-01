import { InputAdornment, Stack, TextField } from "@mui/material";

export const MuiTextField = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction={"row"}>
        <TextField label="First Name" variant="outlined"></TextField>
        <TextField label="Middle Name" variant="filled"></TextField>
        <TextField label="Last Name" variant="standard"></TextField>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <TextField
          label="Name"
          variant="outlined"
          size="small"
          color="secondary"
        ></TextField>
        <TextField
          label="disabled"
          variant="filled"
          size="small"
          color="secondary"
          disabled
        ></TextField>
        <TextField
          label="Read only"
          variant="standard"
          size="small"
          color="secondary"
          InputProps={{ readOnly: true }}
        ></TextField>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField label="Email" required></TextField>
        <TextField
          label="Password"
          helperText="Do Not share this with other"
          type="password"
          required
        ></TextField>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        ></TextField>
        <TextField
          label="Distance"
          InputProps={{
            endAdornment: <InputAdornment position="end">KM</InputAdornment>,
          }}
        ></TextField>
      </Stack>
    </Stack>
  );
};
