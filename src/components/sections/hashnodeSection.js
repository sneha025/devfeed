import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import HorizontalCard from "../cards/horizontalMediaCard";
import fetchFromHashnode from "../lib/Hashnode";
import hashnode from "../../assets/hashnode.png";
const HashSection = () => {
  const [hashnodeData, setData] = useState([]);

  const fetchDataFromHashnode = () => {
    fetchFromHashnode().then((data) => {
      console.log(data.data.data.storiesFeed);
      setData(data.data.data.storiesFeed);
    });
  };
  useEffect(() => {
    fetchDataFromHashnode();
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
        {hashnodeData.map((item) => {
          return <HorizontalCard item={item} />;
        })}
      </Box>
    </React.Fragment>
  );
};

export default HashSection;
