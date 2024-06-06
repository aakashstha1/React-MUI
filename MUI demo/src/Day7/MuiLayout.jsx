import { Stack, Box, Divider } from "@mui/material";

export const MuiBox = () => {
  return (
    <Stack
      width={"500px"}
      border={"1px solid"}
      direction={"row"}
      spacing={2}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Box
        sx={{
          backgroundColor: "blue",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "green",
          },
          textAlign: "center",
        }}
      >
        Hello
      </Box>
      <Box
        display={"flex"}
        width={"100px"}
        height={"100px"}
        bgcolor={"success.light"}
        p={2}
        alignItems={"center"}
        justifyContent={"center"}
      >
        World!
      </Box>
    </Stack>
  );
};
