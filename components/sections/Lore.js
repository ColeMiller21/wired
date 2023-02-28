import React from "react";
import FallInPlace from "../FallInPlace";
import MainHeader from "../MainHeader";

const Lore = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center sub-page-bg bg-cover bg-no-repeat">
      <MainHeader>LORE/UTILITY</MainHeader>
      <FallInPlace>
        <div className="w-full mt-[-125px] md:mt-[-250px] flex justify-center">
          <img
            src="/Radovan.png"
            alt="Radovan"
            className="w-[75%] md:w-[35%] "
          />
        </div>
      </FallInPlace>
      <FallInPlace delay={0.05}>
        <div className="backdrop-blur-md bg-black bg-opacity-40 w-[95%] lg:w-[70%] text-gray-300 flex flex-col gap-[2.5rem] font-ubuntu text-[1.25rem] mt-[-10px] mb-[100px] p-[2rem]">
          <div>
            <h2 className="text-[8.5vw] md:text-[6vw] text-center font-audiowide main-title">
              UTILTY
            </h2>
            <ul className="list-none text-center flex flex-col gap-[1rem] text-[1.25rem]">
              <li>
                <span className="text-[1.7rem] main-title">1. </span> Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </li>
              <li>
                <span className="text-[1.7rem] main-title">2. </span> Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </li>
              <li>
                <span className="text-[1.7rem] main-title">3. </span> Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </li>
              <li>
                <span className="text-[1.7rem] main-title">4. </span> Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-[8.5vw] md:text-[6vw] text-center font-audiowide main-title ">
              LORE
            </h2>
            <p className="lore-text leading-loose text-[1.25rem] text-center">
              Radovan, the crazed scientist, is the ultimate antagonist of this
              sci-fi horror story. His obsession with extending his life, or
              even avoiding death at all costs, has driven him to create devices
              beyond imagination. However, his physical health is critical, and
              he can barely move without the aid of machines. Despite this
              limitation, Radovan has found a way to exist beyond his physical
              form. He is able to live in many organisms using digital space,
              which enables him to transfer his mind into the computer and
              control his victims like a virus. The most terrifying aspect of
              Radovan&apos;s existence is that his brain is directly connected
              to the computer, making him almost omnipotent. Although he is
              static physically, mentally he is more powerful than ever before.
              He has also gathered supporters to aid him in his quest for
              eternal life. The man on his back is using a breathing machine,
              similar to a blacksmith&apos;s bellows, to keep the boss alive.
              This machine substitutes for Radovan&apos;s lungs, which no longer
              function. The lore of Radovan creates a world where humans are no
              longer the only dominant species. The line between human and
              machine is blurred, and the boundaries of life and death are
              pushed to the limit. Radovan is a symbol of the ultimate desire
              for power and control. His mind is more powerful than his physical
              body, and he is willing to do anything to achieve his goal. As the
              story unfolds, we are left to wonder if Radovan will succeed in
              his quest for eternal life or if his madness will lead to his
              ultimate demise.
            </p>
          </div>
        </div>
      </FallInPlace>
    </div>
  );
};

export default Lore;
