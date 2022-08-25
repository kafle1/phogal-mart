import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Typography variant="h2" align="center" paddingTop={10} color="initial">
        404 Page Not Found
      </Typography>
      <Typography variant="h5" align="center" gutterBottom color="primary">
        Wrong URL, this page does not exist !
      </Typography>
      <Grid paddingTop={3} container justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
        >
          Back to Homepage
        </Button>
      </Grid>
    </div>
  );
};

export default PageNotFound;
