import React from "react";
import { motion } from "framer-motion";

const FallInPlace = ({ children, delay }) => {
  return (
    <motion.div
      className="flex items-center justify-center"
      initial={{ scale: 1, opacity: 0, translateY: "20px" }}
      animate={{ scale: 1, opacity: 1, translateY: 0, delay: delay || 0.02 }}
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: 1,
        delay: delay || 0.02,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FallInPlace;
