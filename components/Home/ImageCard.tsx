import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface Props {
  image: StaticImageData;
  isSelected: boolean;
  setSelected: () => void;
}

const ImageCard = ({ image, isSelected, setSelected }: Props) => {
  const containerVar = {
    hidden: {
      opacity: 0,
      y: -50,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.3,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        type: "spring",
        bounce: 0.2,
        duration: 0.7,
        delay: 0.3,
      },
    },
  };

  const childrenVar = {
    hidden: { opacity: 0, y: -50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div
      className={`relative h-full w-full ${
        isSelected ? "max-w-[60%]" : "max-w-[10%]"
      } overflow-hidden transition-all duration-300 ease-in-out`}
      onMouseEnter={setSelected}
    >
      <div
        className={`${
          isSelected ? "bg-black/0" : "bg-black/40"
        } transition-bg absolute z-20 h-full w-full duration-700 ease-in-out`}
      />
      <div
        className={`absolute bottom-0 h-1/2 w-full ${
          isSelected ? "bg-gradient-to-t from-black/60" : ""
        } z-10 transition-all duration-700 ease-in-out`}
      />
      <Image
        src={image}
        alt="Scenery"
        layout="fill"
        objectFit="cover"
        className={`${
          isSelected ? "scale-105" : "scale-100"
        } transition-transform duration-1000 ease-in-out`}
      />
      <motion.div
        variants={containerVar}
        animate={isSelected ? "show" : "hidden"}
        className="absolute bottom-10 left-10 z-30 flex min-w-[500px] flex-col gap-5"
      >
        <p className="w-fit rounded-md bg-white px-4 py-2 text-sm font-bold uppercase ">
          Photography
        </p>
        <p className="text-5xl font-bold text-white ">St. Petersburg</p>
      </motion.div>
    </div>
  );
};

export default ImageCard;
