import React from "react";
import HorizontalCard from "../cards/horizontalMediaCard";
import VerticleCard from "../cards/verticleMediaCard";
import Section from "../sections/section";

const Home = () => {
  return (
    <React.Fragment>
      <div>
        <Section componentToPassDown={<VerticleCard />} />
        <Section componentToPassDown={<HorizontalCard />} />
      </div>
    </React.Fragment>
  );
};

export default Home;
