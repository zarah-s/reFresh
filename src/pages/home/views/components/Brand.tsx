import React from "react";
import { motion } from "framer-motion";
interface Props {
  brand: {
    title: string;
    image: any;
    colorHex: string;
  };
  delay: number;
}
const Brand = ({ brand, delay }: Props) => {
  const backgroundVariants = {
    initial: { y: "100%", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut", delay },
    },
  };

  const imageVariants = {
    initial: { scale: 0 },
    animate: {
      scale: 1,
      transition: { delay: delay * 1.5, duration: 0.5, ease: "easeInOut" },
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={backgroundVariants}
      className={`card xxl:h-[60vh] h-[390px] flex items-center justify-center overflow-hidden ${
        brand.colorHex === "#DCCEAC"
          ? "bg-[#DCCEAC]"
          : brand.colorHex === "#F8F8F8"
          ? "bg-[#F8F8F8]"
          : brand.colorHex === "#E89AAA"
          ? "bg-[#E89AAA]"
          : "bg-[#E2DCC8]"
      }`}
    >
      <motion.img
        variants={imageVariants}
        src={brand.image}
        alt="Your Image"
        className="max-w-full max-h-full"
      />
      <div className="info space-y-3">
        <h1 className="text-2xl">{brand.title}</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus,
          cum!
        </p>
        <button className="btn">Read More...</button>
      </div>
    </motion.div>
  );
};

export default Brand;
