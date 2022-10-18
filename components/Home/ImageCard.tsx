import React, { useMemo } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, Variants } from "framer-motion";

interface Props {
  data: { image: StaticImageData; category: string; title: string };
  index: number;
  count: number;
  isSelected: boolean;
  setSelected: () => void;
}

const ImageCard = ({ data, index, count, isSelected, setSelected }: Props) => {
  const containerVar: Variants = {
    show: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  };

  const childrenVar: Variants = {
    hidden: { opacity: 0, y: -25 },
    show: { opacity: 1, y: 0 },
  };

  const maximumCardWidthSelected = useMemo(() => {
    switch (count) {
      case 1:
        return "max-w-[100%]";
      case 2:
        return "max-w-[70%]";
      case 3:
        return "max-w-[60%]";
      case 4:
        return "max-w-[70%]";
      case 5:
        return "max-w-[60%]";
      default:
        return "max-w-[100%]";
    }
  }, [count]);

  const maximumCardWidthUnSelected = useMemo(() => {
    switch (count) {
      case 1:
        return "max-w-[0%]";
      case 2:
        return "max-w-[30%]";
      case 3:
        return "max-w-[20%]";
      case 4:
        return "max-w-[10%]";
      case 5:
        return "max-w-[10%]";
    }
  }, [count]);

  return (
    <div
      className={`relative h-full w-full ${
        isSelected ? maximumCardWidthSelected : maximumCardWidthUnSelected
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
        src={data.image}
        alt="Scenery"
        layout="fill"
        objectFit="cover"
        className={`${
          isSelected ? "scale-105" : "scale-100"
        } transition-transform duration-1000 ease-in-out`}
      />
      <motion.div
        initial="hidden"
        animate={isSelected ? "show" : ""}
        className="absolute bottom-0 left-0 z-30 flex h-full w-full flex-col justify-between p-10"
      >
        <div className="flex flex-col gap-1">
          <div className="h-[1px] w-full bg-white/80" />
          <div className="relative flex justify-between font-light tracking-widest text-white/80">
            <motion.p
              variants={childrenVar}
              transition={{ duration: isSelected ? 0.3 : 0.1 }}
            >
              PORTFOLIO
            </motion.p>
            <p className="absolute right-0">
              {index < 9 ? `0${index + 1}` : index + 1}
            </p>
          </div>
        </div>
        <motion.div
          variants={containerVar}
          className="flex min-w-[500px] flex-col gap-5"
        >
          <motion.p
            variants={childrenVar}
            transition={{ duration: isSelected ? 0.3 : 0.1 }}
            className="w-fit rounded-md bg-white px-4 py-2 text-sm font-medium uppercase"
          >
            {data.category}
          </motion.p>
          <motion.p
            variants={childrenVar}
            transition={{ duration: isSelected ? 0.3 : 0.1 }}
            className="text-5xl font-bold text-white"
          >
            {data.title}
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ImageCard;
