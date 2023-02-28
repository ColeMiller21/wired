import SEO from "../components/SEO";
import Landing from "../components/sections/Landing";

const SEOdesc = "Home page of Wires NFT Collection";

export default function Home() {
  return (
    <>
      <SEO title="Home" description={SEOdesc} path="/" />
      <Landing />
    </>
  );
}
