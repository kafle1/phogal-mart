import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Database } from "../appwrite/database.appwrite";
import ImageCard from "./ImageCard";

const Items = ({ isProfile }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function getPhotographs() {
      if (isProfile) {
        const { data } = await Database.getPhotographs(
          localStorage.getItem("uid")
        );
        setImages(data);
      } else {
        const { data } = await Database.getPhotographs();
        setImages(data);
      }
    }
    getPhotographs();
  }, []);

  console.log(images);
  return (
    <div>
      <Grid
        p={4}
        paddingTop={10}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {images &&
          images.map((image) => (
            <Grid item key={image.title} >
              <ImageCard isProfile={isProfile} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Items;
