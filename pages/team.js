import React from "react";
import Team from "../components/sections/Team";
import SEO from "../components/SEO";

const SEOdesc = "Team page for Wires NFT Collection";

const team = () => {
  return (
    <>
      <SEO title="Team" description={SEOdesc} path="/lore" />
      <Team />
    </>
  );
};

export default team;
