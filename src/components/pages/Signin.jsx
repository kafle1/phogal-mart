import {
  Button,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import Footer from "../shared/Footer";
import Header from "../shared/Header";
import React, { useState } from "react";
import { Container } from "@mui/system";
import PasswordIcon from "@mui/icons-material/Password";

const Signin = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  //Signin the user
  const handleSignIn = () => {
    console.log(credentials);
  };
  return (
    <div>
      <Header />
      <Container>
        <Stack paddingTop={10} spacing={3}>
          <Typography variant="h5" color="initial">
            Signin
          </Typography>
          <TextField
            id="email"
            label="Email"
            onChange={(e) => {
              setCredentials({
                ...credentials,
                email: e.target.value,
              });
            }}
            placeholder="Enter Email"
            type="email"
            value={credentials.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {" "}
                  <AlternateEmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="password"
            label="Password"
            placeholder="Enter Password"
            onChange={(e) => {
              console.log(e.target.value);
              setCredentials({
                ...credentials,
                password: e.target.value,
              });
            }}
            type="password"
            value={credentials.password}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {" "}
                  <PasswordIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={() => handleSignIn()}
          >
            Sign In
          </Button>
        </Stack>
      </Container>

      <Footer />
    </div>
  );
};

export default Signin;
