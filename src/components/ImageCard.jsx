import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Avatar,
  Button,
  CardActionArea,
  CardActions,
  CardHeader,
} from "@mui/material";
import { LocalMallRounded } from "@mui/icons-material";

const ImageCard = ({ isProfile }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {!isProfile ? (
        <CardHeader
          avatar={<Avatar aria-label="recipe">R</Avatar>}
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
      ) : null}

      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://source.unsplash.com/random"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles,
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="text"
          sx={{ fontWeight: "bold", color: "black", fontSize: "16px" }}
          color="primary"
        >
          Rs. 300
        </Button>
        <Button
          variant="contained"
          startIcon={<LocalMallRounded />}
          color="primary"
        >
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default ImageCard;
