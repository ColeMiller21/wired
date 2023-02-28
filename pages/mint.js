import React from "react";
import WLChecker from "../components/sections/WLChecker";
import SEO from "../components/SEO";

const SEOdesc = "Whitelist Checker and Mint page for Wires NFT Collection";

const mint = () => {
  return (
    <>
      <SEO title="WL Checker" description={SEOdesc} path="/mint" />
      <WLChecker />
    </>
  );
};

export default mint;
