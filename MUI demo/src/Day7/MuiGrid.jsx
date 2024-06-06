import { Grid, Box, Container, Paper } from "@mui/material";

export const MuiGrid = () => {
  return (
    <Paper
      sx={{ padding: "32px", backgroundColor: "lightgreen" }}
      elevation={4}
    >
      <Grid container my={4}>
        <Grid item xs={12} sm={6} md={2}>
          <Box bgcolor={"blue"} p={2}>
            Item1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Box bgcolor={"red"} p={2}>
            Item2
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Box bgcolor={"green"} p={2}>
            Item3
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Box bgcolor={"yellow"} p={2}>
            Item4
          </Box>
        </Grid>
      </Grid>
      <Container maxWidth="sm">
        <Box bgcolor={"lightblue"} height={"100px"} m={2}></Box>
      </Container>
    </Paper>
  );
};
