import axios from "axios";
import React, { useState } from "react";
import MainHeader from "../MainHeader";
import { ethers } from "ethers";
import { ClipLoader } from "react-spinners";

const WLChecker = () => {
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const checkForUser = async () => {
    if (address === "" || !address) return;
    setIsChecking(true);
    // if (!isValidAddress(address)) {
    //   isError(true);
    //   setErrorMessage("Address entered is not valid.");
    //   setIsChecking(false);
    // }
    try {
      let { data } = await axios.get(`/api/getUser?address=${address}`);
      if (data === "") {
        console.log("No whitelisted");
        setMessage("This address is not whitelisted!");
        setIsChecking(false);
        return;
      }
      setMessage("Congrats! This wallet is whitelisted!");
      setIsChecking(false);
      console.log("Is whitelisted");
    } catch (err) {
      console.log(err);
      setIsChecking;
    }
  };

  const isValidAddress = (address) => {
    return ethers.utils.isAddress(address);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center sub-page-bg bg-cover bg-no-repeat gap-[2.5rem] relative">
      <MainHeader>WL CHECKER</MainHeader>

      <div className="flex flex-col items-center justify-center px-[2rem] py-[3rem] gap-[1.5rem] backdrop-blur-md bg-black bg-opacity-40 z-10">
        <h3 className="text-gray-300 text-center">
          Enter Address below to check WL status!
        </h3>
        <input
          type="text"
          placeholder="Enter Address"
          className="h-[45px] w-[250px] md:w-[400px] border-2 border-red-800 rounded pl-2 text-[#FAFAFA] bg-[#141414] overflow-hidden"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />
        {message !== "" && <p className="text-gray-300">{message}</p>}
        {isError && <p>{errorMessage}</p>}
        <button
          onClick={checkForUser}
          className="bg-black px-[24px] py-[12px] text-gray-300"
        >
          {isChecking ? <ClipLoader color="#FaFafa" size={20} /> : "Check"}
        </button>
      </div>
      <img
        src="/Victim.png"
        alt="Victim"
        className="min-w-[250px] md:w-[400px] absolute bottom-0 right-[-5%] z-1"
      />
    </div>
  );
};

export default WLChecker;
