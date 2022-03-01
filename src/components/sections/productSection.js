import React, { useEffect, useState } from "react";

import HorizontalProductHuntCard from "../cards/productCard";
import productHunt from "../lib/productHunt";
import product from "../../assets/product.png";
import Box from "@mui/material/Box";
const ProductHuntSection = () => {
  const [data, setData] = useState([]);
  const fetchProductHuntData = () => {
    productHunt().then((data) => {
      console.log(data.data.posts);
      setData(data.data.posts.slice(0, 10));
    });
  };
  useEffect(() => {
    fetchProductHuntData();
  }, []);
  return (
    <React.Fragment>
      <Box
        sx={{
          width: 600,
          height: "300vh",
          maxHeight: "300vh",
          backgroundColor: "#393E46",
        }}
      >
        {data.slice(0, 9).map((item) => {
          return <HorizontalProductHuntCard item={item} />;
        })}
      </Box>
    </React.Fragment>
  );
};

export default ProductHuntSection;
