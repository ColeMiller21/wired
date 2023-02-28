import React from "react";

const MainHeader = ({ children }) => {
  return (
    <h1 className="font-audiowide text-[10vw] main-title mt-[60px] md:mt-[40px] z-10">
      {children}
    </h1>
  );
};

export default MainHeader;
