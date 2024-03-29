import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";

const Items = ({ isProfile }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function getPhotographs() {}
    getPhotographs();
  }, []);

  
  return (
    <div>
      <Grid
        p={4}
        paddingTop={10}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item>
          <ImageCard isProfile={isProfile} />
        </Grid>
        <Grid item>
          <ImageCard isProfile={isProfile} />
        </Grid>
        <Grid item>
          <ImageCard isProfile={isProfile} />
        </Grid>
        <Grid item>
          <ImageCard isProfile={isProfile} />
        </Grid>
        <Grid item>
          <ImageCard isProfile={isProfile} />
        </Grid>
        <Grid item>
          <ImageCard isProfile={isProfile} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Items;
