import React from "react";
import Lore from "../components/sections/Lore";
import SEO from "../components/SEO";

const SEOdesc = "Lore page for Wires";

const lore = () => {
  return (
    <>
      <SEO title="Lore" description={SEOdesc} path="/lore" />
      <Lore />
    </>
  );
};

export default lore;
