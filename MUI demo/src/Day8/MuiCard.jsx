import { Box, Stack, Card, CardContent, Typography, CardActions, Button, CardMedia,} from "@mui/material";
export const MuiCard = () => {
  return (
    <Stack spacing={2} direction={"row"}>
      <Box width={"300px"}>
        <Card>
          <CardMedia
            component={"img"}
            height={140}
            image="https://source.unsplash.com/random"
            alt="unsplash img"
          />
          <CardContent>
            <Typography component={"div"} variant="h4">
              Header
            </Typography>
            <Typography variant="body2" color={"text.secondary"}>
              In Material Design, surface components and shadow styles are
              heavily influenced by their real-world physical counterparts.
              Material UI implements this concept with the Paper component, a
              container-like surface that features the elevation prop for
              pulling box-shadow values from the theme.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
      <Box width={"300px"}>
        <Card>
          <CardMedia
            component={"img"}
            height={140}
            image="https://source.unsplash.com/random"
            alt="unsplash img"
          />
          <CardContent>
            <Typography component={"div"} variant="h4">
              Header
            </Typography>
            <Typography variant="body2" color={"text.secondary"}>
              In Material Design, surface components and shadow styles are
              heavily influenced by their real-world physical counterparts.
              Material UI implements this concept with the Paper component, a
              container-like surface that features the elevation prop for
              pulling box-shadow values from the theme.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
      <Box width={"300px"}>
        <Card>
          <CardMedia
            component={"img"}
            height={140}
            image="https://source.unsplash.com/random"
            alt="unsplash img"
          />
          <CardContent>
            <Typography component={"div"} variant="h4">
              Header
            </Typography>
            <Typography variant="body2" color={"text.secondary"}>
              In Material Design, surface components and shadow styles are
              heavily influenced by their real-world physical counterparts.
              Material UI implements this concept with the Paper component, a
              container-like surface that features the elevation prop for
              pulling box-shadow values from the theme.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
      <Box width={"300px"}>
        <Card>
          <CardMedia
            component={"img"}
            height={140}
            image="https://source.unsplash.com/random"
            alt="unsplash img"
          />
          <CardContent>
            <Typography component={"div"} variant="h4">
              Header
            </Typography>
            <Typography variant="body2" color={"text.secondary"}>
              In Material Design, surface components and shadow styles are
              heavily influenced by their real-world physical counterparts.
              Material UI implements this concept with the Paper component, a
              container-like surface that features the elevation prop for
              pulling box-shadow values from the theme.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
      <Box width={"300px"}>
        <Card>
          <CardMedia
            component={"img"}
            height={140}
            image="https://source.unsplash.com/random"
            alt="unsplash img"
          />
          <CardContent>
            <Typography component={"div"} variant="h4">
              Header
            </Typography>
            <Typography variant="body2" color={"text.secondary"}>
              In Material Design, surface components and shadow styles are
              heavily influenced by their real-world physical counterparts.
              Material UI implements this concept with the Paper component, a
              container-like surface that features the elevation prop for
              pulling box-shadow values from the theme.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
    </Stack>
  );
};
