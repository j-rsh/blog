import { Container, Grid, Typography } from "@mui/material";
import Athours from "../athours/Authors";
import Blogs from "../blog/Blogs";

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} mt={4}>
        <Grid item xs={12} md={3}>
          <Typography component="h3" variant="h5" fontWeight={700}>نویسنده ها</Typography>
          <Athours/>
        </Grid>

        <Grid item xs={12} md={9}>
          <Typography component="h3" variant="h5" fontWeight={700}>مقالات</Typography>
          <Blogs/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
