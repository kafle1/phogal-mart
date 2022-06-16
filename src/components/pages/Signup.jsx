import {
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import Footer from "../shared/Footer";
import Header from "../shared/Header";
import React, { useState, useContext } from "react";
import { Container } from "@mui/system";
import PasswordIcon from "@mui/icons-material/Password";
import { useNavigate } from "react-router-dom";
import AppState from "../../state/context/AppState";

const Signup = () => {
  const navigate = useNavigate();
  const { isLoggedIn, changeAuth } = useContext(AppState);

  const [credentials, setCredentials] = useState({
    name: "",
    address: "",
    email: "",
    password: "",
  });

  //Signup user
  const handleSignUp = () => {
    console.log(credentials);
    changeAuth();
  };

  if (isLoggedIn) {
    navigate("/");
  }

  return (
    <div>
      <Header />
      <Container>
        <Stack paddingTop={10} spacing={3}>
          <Typography variant="h5" color="initial">
            Sign Up
          </Typography>
          <TextField
            id="name"
            label="Name"
            onChange={(e) => {
              setCredentials({
                ...credentials,
                name: e.target.value,
              });
            }}
            placeholder="Enter Name"
            type="text"
            value={credentials.name}
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
            onChange={(e) => {
              setCredentials({
                ...credentials,
                address: e.target.value,
              });
            }}
            placeholder="Enter Your Address"
            type="text"
            value={credentials.address}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AlternateEmailIcon />
                </InputAdornment>
              ),
            }}
          />
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
                  <PasswordIcon />
                </InputAdornment>
              ),
            }}
          />
          <Typography variant="body2" color="initial">
            Already have an account?{" "}
            <Button
              variant="text"
              sx={{ fontWeight: "bold" }}
              onClick={() => navigate("/signin")}
            >
              Signin
            </Button>
          </Typography>
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={() => handleSignUp()}
          >
            Sign Up
          </Button>
        </Stack>
      </Container>

      <Footer />
    </div>
  );
};

export default Signup;
