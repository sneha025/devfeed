import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const HorizontalCard = ({ item }) => {
  const { title, slug, author, coverImage, brief } = item;
  const url =
    author.publicationDomain !== ""
      ? `https://${author.publicationDomain}/${slug}`
      : "https://hashnode.com/";
  console.log(url);
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
        image={coverImage}
        sx={{
          padding: "1rem 1rem 1rem 1rem",
          width: "50%",
          height: "50%",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
        alt="green iguana"
      />
      <Box>
        <CardContent
          sx={{
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
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
            {brief}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ justifyContent: "flex-end", alignItems: "flex-end" }}
        >
          <Button
            sx={{ bgcolor: "#00ADB5" }}
            variant="contained"
            href={url}
            size="small"
            target="_blank"
          >
            More
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};

export default HorizontalCard;
