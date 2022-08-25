import {
  Alert,
  Button,
  InputAdornment,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

import Footer from "../shared/Footer";
import Header from "../shared/Header";
import React, { useState, useContext, useEffect } from "react";
import { Container } from "@mui/system";
import PasswordIcon from "@mui/icons-material/Password";
import { useNavigate } from "react-router-dom";
import AppContext from "../../state/context/appContext";

const Signin = () => {
  const navigate = useNavigate();
  const { isLoggedIn, changeAuth } = useContext(AppContext);
  
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [alert, setAlert] = useState({
    isOpen: false,
    type: "success",
    message: "Alert",
  });


  //Signin the user
  const handleSignIn = async () => {};

  return (
    <div>
      <Snackbar
        open={alert.isOpen}
        autoHideDuration={6000}
        onClose={() => setAlert({ ...alert, isOpen: false })}
      >
        <Alert
          variant="filled"
          severity={alert.type}
          sx={{ width: "100%" }}
          onClose={() => setAlert({ ...alert, isOpen: false })}
        >
          {alert.message}
        </Alert>
      </Snackbar>

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
            Do not have an account?
            <Button
              variant="text"
              sx={{ fontWeight: "bold" }}
              onClick={() => navigate("/signup")}
            >
              Signup
            </Button>
          </Typography>

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
