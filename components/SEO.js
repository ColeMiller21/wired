import React from "react";
import { NextSeo } from "next-seo";

const baseUrl = "";

const SEO = ({ title, description, imagePath, path }) => {
  return (
    <NextSeo
      title={`${title} | Wires`}
      description={description}
      canonical={path ? `${baseUrl}/${path}` : baseUrl}
      openGraph={{
        url: path ? `${baseUrl}/${path}` : baseUrl,
        title,
        description: "Wires",
        images: [
          {
            url: "/background-twitter.png",
            width: 1500,
            height: 500,
            alt: "Og Image Alt",
            type: "image/png",
          },
        ],
        site_name: "Wires",
      }}
      twitter={{
        handle: "@wires",
        site: baseUrl,
        cardType: "summary_large_image",
      }}
      additionalLinkTags={[{ rel: "icon", href: "/Brain-logo-2.png" }]}
      additionalMetaTags={[
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "keywords",
          content: "KEYWORDS GO HERE",
        },
      ]}
      robotsProps={{
        nosnippet: true,
        notranslate: true,
        noimageindex: true,
        noarchive: true,
      }}
    />
  );
};

export default SEO;
