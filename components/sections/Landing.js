import React, { useEffect, useState, useRef } from "react";
import MainHeader from "../MainHeader";

const Landing = () => {
  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };

  useEffect(() => {
    window.addEventListener("resize", appHeight);
    appHeight();
  }, []);

  return (
    <div className="min-full-page w-screen flex flex-col items-center bg-[url(/main-bg.png)] bg-cover bg-center">
      <MainHeader>WIRES</MainHeader>
    </div>
  );
};

export default Landing;
