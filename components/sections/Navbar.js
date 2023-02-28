import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconContext } from "react-icons";
import { pageLinks } from "../../data/links/pageLinks";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

const Navbar = ({ toggleAudio, muted }) => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <IconContext.Provider
      value={{
        color: "#fafafa",
        size: "1.5rem",
        className: "icons hover:text-red-400",
      }}
    >
      <nav className="above-all fixed top-0 left-0 above-all min-w-[100vw] bg-black md:bg-transparent min-h-[60px] flex justify-between items-center px-[1rem] md:px-[1.5rem] text-white">
        <Link href="/">
          <img
            src="/logo-transparent.png"
            className="h-[55px] aspect-square brighness-150 cursor-pointer"
          />
        </Link>
        <ul className="hidden md:flex gap-[.7rem] md:gap-[1rem]">
          {pageLinks.map((link, i) => {
            return (
              <Link href={link.href} key={`${link.title}-${i}`}>
                <div className="relative cursor-pointer transition duration-500 ease-in-out transform hover:scale-110 ">
                  <img
                    src="/monitor.png"
                    alt="Your Image"
                    className="w-[120px] h-[50px] object-cover "
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-300 font-bold font-orbitron">
                      {link.title}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </ul>
        <ul className="flex font-pixel md:hidden gap-[1rem]">
          <li onClick={toggleNav}>
            {navOpen ? <FaTimes /> : <GiHamburgerMenu />}
          </li>
        </ul>
        <AnimatePresence>
          {navOpen && (
            <motion.div
              key="answer"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              }}
              exit={{ opacity: 0, transition: { duration: 0.4 } }}
              className="w-screen flex font-vcr absolute top-[60px] left-0 bg-black above-all"
            >
              <ul className="flex flex-col divide-y divide-red-800 w-full border-b border-red-800 text-gray-300">
                {pageLinks.map((link, i) => {
                  return (
                    <Link href={link.href} key={`${link.title}-${i}`}>
                      <motion.li
                        className="font-vcr cursor-pointer hover:text-red-800 py-[1rem] px-[.8rem]"
                        onClick={toggleNav}
                      >
                        {link.title}{" "}
                      </motion.li>
                    </Link>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </IconContext.Provider>
  );
};

export default Navbar;
