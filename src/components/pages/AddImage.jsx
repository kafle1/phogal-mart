import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import { Container } from "@mui/system";
import { Button, Input, LinearProgress, Stack, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import TitleIcon from "@mui/icons-material/Title";
import DescriptionIcon from "@mui/icons-material/Description";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const AddImage = () => {
  const [details, setDetails] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

  //Add photograph
  const handleUpload = () => {
    console.log(details);
  };
  return (
    <div>
      <Header />
      <Container>
        <Typography paddingTop={10} variant="h5" color="initial">
          Create a New Photograph
        </Typography>

        <Stack paddingY={3} spacing={3}>
          <TextField
            id="title"
            label="Title"
            placeholder="Enter title for the photograph"
            value={details.title}
            onChange={(e) => {
              setDetails({ ...details, title: e.target.value });
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TitleIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="description"
            label="Description"
            multiline
            rows={6}
            value={details.description}
            onChange={(e) => {
              setDetails({ ...details, description: e.target.value });
            }}
            placeholder="Enter detailed description of the photograph"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DescriptionIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="price"
            label="Price"
            value={details.price}
            type="number"
            onChange={(e) => {
              setDetails({ ...details, price: e.target.value });
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Rs.</InputAdornment>
              ),
            }}
          />
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="raised-button-file"
            multiple
            type="file"
            onChange={(e) =>
              setDetails({ ...details, image: e.target.files[0] })
            }
          />
          <label htmlFor="raised-button-file">
            <Button
              variant="contained"
              startIcon={<UploadFileIcon />}
              component="span"
            >
              Upload Photograph
            </Button>
          </label>
          <LinearProgress hidden={true} variant="determinate" value={10} />

          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={() => handleUpload()}
          >
            Add Photograph for Sale
          </Button>
        </Stack>
      </Container>

      <Footer />
    </div>
  );
};

export default AddImage;
