import React from "react";
import MainHeader from "../MainHeader";

const WLChecker = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center sub-page-bg bg-cover bg-no-repeat gap-[2.5rem] relative">
      <div className="md:mt-[55px] text-center">
        <MainHeader>WL CHECKER</MainHeader>
      </div>
      <img
        src="/Victim.png"
        alt="Victim"
        className="w-[200px] md:w-[400px] absolute bottom-0 right-[-5%]"
      />
    </div>
  );
};

export default WLChecker;
