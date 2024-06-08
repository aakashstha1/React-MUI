import { Link, Stack, Typography } from "@mui/material";

export const MuiLink = () => {
  return (
    <Stack spacing={2} direction={"row"} m={4}>
      <Link href="https://aakashshrestha1.com.np">Link</Link>
      <Typography variant="h6">
        <Link
          href="https://aakashshrestha1.com.np"
          color={"secondary"}
          underline="none"
        >
          Link
        </Link>
      </Typography>
      <Link href="#" variant="body2">
        {'variant="body2"'}
      </Link>
      <Link href="#" underline="hover">
        {'underline="hover"'}
      </Link>
    </Stack>
  );
};
