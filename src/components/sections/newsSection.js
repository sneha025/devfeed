import news from "../lib/news";
import React, { useState, useEffect } from "react";
import VerticleCard from "../cards/verticleMediaCard";
import { Box } from "@mui/system";
import newsImage from "../../assets/news.png";
const NewsSection = () => {
  const [data, setdata] = useState([]);

  const fetchNews = () => {
    news().then((data) => {
      console.log(data.data.articles);
      setdata(data.data.articles.slice(0, 10));
    });
  };
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <React.Fragment>
      <Box
        sx={{
          width: 600,
          height: "300vh",
          backgroundColor: "#393E46",
        }}
      >
        {data.slice(0, 9).map((item) => {
          return <VerticleCard item={item} />;
        })}
      </Box>
    </React.Fragment>
  );
};

export default NewsSection;
