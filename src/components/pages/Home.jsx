import React from "react";
import Items from "../Items";
import Header from "../shared/Header";
import { Grid, Pagination } from "@mui/material";
import Footer from "../shared/Footer";

const Home = () => {
  return (
    <div>
      <Header />

      <Items isProfile={false} />
      <Grid p={2} container justifyContent="center">
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Grid>
      <Footer />
    </div>
  );
};

export default Home;
