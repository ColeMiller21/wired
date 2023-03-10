import Navbar from "../sections/Navbar";
import { FaTwitter } from "react-icons/fa";
import { IconContext } from "react-icons";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col min-w-screen overflow-x-hidden bg-white text-black min-full-page relative">
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <IconContext.Provider
          value={{
            color: "#D1D5DB",
            size: "1.5rem",
            className: "icons cursor-pointer hover:scale-105",
          }}
        >
          <div className="w-screen flex justify-center items-center min-h-[60px] absolute bottom-0 text-white">
            <a
              href="https://twitter.com/wires_bio"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaTwitter />
            </a>
          </div>
        </IconContext.Provider>
      </div>
    </>
  );
};

export default Layout;
