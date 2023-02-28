import React from "react";
import MainHeader from "../MainHeader";

const WLChecker = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center sub-page-bg bg-cover bg-no-repeat gap-[2.5rem] relative">
      <MainHeader>WL CHECKER</MainHeader>
      <img
        src="/Victim.png"
        alt="Victim"
        className="min-w-[250px] md:w-[400px] absolute bottom-0 right-[-5%]"
      />
    </div>
  );
};

export default WLChecker;
