import React from "react";
import MainHeader from "../MainHeader";

const Lore = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center sub-page-bg bg-cover bg-no-repeat gap-[2.5rem]">
      <MainHeader>LORE</MainHeader>
      <div className="w-full mt-[-125px] md:mt-[-250px] flex justify-center">
        <img
          src="/Radovan.png"
          alt="Radovan"
          className="w-[80%] md:w-[50%] aspect-square"
        />
      </div>
      <div className="w-[80%] lg:w-[70%] text-gray-300 flex flex-col gap-[1.5rem] font-ubuntu text-[1.25rem] mb-[100px]">
        <p className="lore-text leading-loose">
          Radovan, the crazed scientist, is the ultimate antagonist of this
          sci-fi horror story. His obsession with extending his life, or even
          avoiding death at all costs, has driven him to create devices beyond
          imagination. However, his physical health is critical, and he can
          barely move without the aid of machines. Despite this limitation,
          Radovan has found a way to exist beyond his physical form. He is able
          to live in many organisms using digital space, which enables him to
          transfer his mind into the computer and control his victims like a
          virus.
        </p>
        <p className="lore-text">
          The most terrifying aspect of Radovan's existence is that his brain is
          directly connected to the computer, making him almost omnipotent.
          Although he is static physically, mentally he is more powerful than
          ever before. He has also gathered supporters to aid him in his quest
          for eternal life. The man on his back is using a breathing machine,
          similar to a blacksmith's bellows, to keep the boss alive. This
          machine substitutes for Radovan's lungs, which no longer function.
        </p>
        <p className="lore-text">
          The lore of Radovan creates a world where humans are no longer the
          only dominant species. The line between human and machine is blurred,
          and the boundaries of life and death are pushed to the limit. Radovan
          is a symbol of the ultimate desire for power and control. His mind is
          more powerful than his physical body, and he is willing to do anything
          to achieve his goal. As the story unfolds, we are left to wonder if
          Radovan will succeed in his quest for eternal life or if his madness
          will lead to his ultimate demise.
        </p>
      </div>
    </div>
  );
};

export default Lore;
