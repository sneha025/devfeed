import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
const VerticleCard = ({ item }) => {
  const { title, link, media } = item;
  console.log(item);
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        maxWidth: 500,
        maxHeight: 300,
        m: 4,
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#222831",
        borderRadius: 4,
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={media}
        sx={{
          padding: "1rem 1rem 1rem 1rem",
          width: "50%",
          maxHeight: "50%",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
        alt="green iguana"
      />
      <Box>
        <CardContent
          sx={{ justifyContent: "flex-end", alignItems: "flex-end" }}
        >
          <Typography
            variant="body2"
            color="#EEEEEE"
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              width: "10rem",
              height: "5rem",
            }}
          >
            {title}
          </Typography>
        </CardContent>

        <CardActions
          sx={{
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <Button
            sx={{ bgcolor: "#00ADB5" }}
            variant="contained"
            href={link}
            target="_blank"
            size="small"
          >
            More
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};

export default VerticleCard;
