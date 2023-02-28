import React from "react";

const MainHeader = ({ children }) => {
  return (
    <h1 className="font-orbitron text-[15vw] lg:text-[10vw] text-gray-300 mt-[60px] lg:mt-[-30px] z-10">
      {children}
    </h1>
  );
};

export default MainHeader;
