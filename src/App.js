import "./App.css";
import HashSection from "./components/sections/hashnodeSection";
import ProductHuntSection from "./components/sections/productSection";
import { Box } from "@mui/system";
import NavBar from "./components/navBar/navBar";
import NewsSection from "./components/sections/newsSection";
import React from "react";
import Footer from "./components/footer/footer";
function App() {
  return (
    <React.Fragment>
      <Box>
        <NavBar />
      </Box>
      <Box sx={{ display: "flex", width: "100%" }}>
        <HashSection />
        <NewsSection />
        <ProductHuntSection />
      </Box>
      <Box>
        <Footer />
      </Box>
    </React.Fragment>
  );
}

export default App;
