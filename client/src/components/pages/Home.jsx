import React, { useContext } from "react";
import Items from "../Items";
import Header from "../shared/Header";
import { Grid, Pagination } from "@mui/material";
import Footer from "../shared/Footer";
import AppContext from "../../state/context/appContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AppContext);

 
  return (
    <div>
      <Header  />

      <Items isProfile={false} />
      <Grid p={2} container justifyContent="center">
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Grid>
      <Footer />
    </div>
  );
};

export default Home;
