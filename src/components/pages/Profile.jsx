import { Avatar, Grid, Stack, Typography, Chip } from "@mui/material";
import React, {useContext} from "react";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import SellIcon from "@mui/icons-material/Sell";
import Items from "../Items";
import { useNavigate } from "react-router-dom";
import AppContext from "../../state/context/appContext";

const Profile = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AppContext);

  
  //Redirect user to signin if not logged in
  if (!isLoggedIn) {
    navigate("/signin");
  }
  return (
    <div>
      <Header />

      <Grid justifyContent="center" paddingTop={10}>
        <Stack textAlign="center" alignItems="center">
          <Avatar
            alt="Remy Sharp"
            src="https://source.unsplash.com/random"
            sx={{ width: 100, height: 100 }}
          />

          <Typography variant="h6" color="initial">
            Niraj Kafle
          </Typography>
          <Typography variant="body1" color="initial">
            Kirtipur, Kathmandu
          </Typography>
          <Typography variant="body2" color="initial" gutterBottom>
            26th November, 2019 Tuesday
          </Typography>
          <Chip label="30+" color="success" size="large" icon={<SellIcon />} />
        </Stack>

        <Items isProfile={true} />
      </Grid>
      <Footer />
    </div>
  );
};

export default Profile;
