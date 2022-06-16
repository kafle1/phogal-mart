import React, { useState, useContext } from "react";
import Typography from "@mui/material/Typography";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import { Container } from "@mui/system";
import {
  Avatar,
  Badge,
  Button,
  Chip,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import DescriptionIcon from "@mui/icons-material/Description";
import SellIcon from "@mui/icons-material/Sell";
import KeyIcon from "@mui/icons-material/Key";
import BadgeIcon from "@mui/icons-material/Badge";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import AppContext from "../../state/context/appContext";

const MyAccount = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AppContext);


  //Redirect user to signin if not logged in
  if (!isLoggedIn) {
    navigate("/signin");
  }


  const [details, setDetails] = useState({
    name: "Niraj Kafle",
    email: "kafleniraj@gmail.com",
    address: "Kirtipur, Kathmandu",
    bio: "Simple Photographer",
  });

  //Update the details
  const handleUpdate = () => {
    console.log(details);
  };

  //Change the user's password
  const handlePasswordChange = () => {
    console.log("change password");
  };
  return (
    <div>
      <Header  />
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
      </Grid>
      <Container>
        <Typography paddingTop={10} variant="h5" color="initial">
          My Account
        </Typography>

        <Stack paddingY={3} spacing={3}>
          <TextField
            id="name"
            label="Name"
            value={details.name}
            onChange={(e) => {
              setDetails({ ...details, name: e.target.value });
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BadgeIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="email"
            label="Email"
            disabled
            type="email"
            value={details.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AlternateEmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="address"
            label="Address"
            value={details.address}
            onChange={(e) => {
              setDetails({ ...details, address: e.target.value });
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <HomeIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="bio"
            label="Bio"
            value={details.bio}
            onChange={(e) => {
              setDetails({ ...details, bio: e.target.value });
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DescriptionIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="outlined"
            startIcon={<KeyIcon />}
            onClick={() => handlePasswordChange()}
            color="primary"
          >
            Change Password
          </Button>

          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={() => handleUpdate()}
          >
            Update
          </Button>
        </Stack>
      </Container>
      <Footer />
    </div>
  );
};

export default MyAccount;
