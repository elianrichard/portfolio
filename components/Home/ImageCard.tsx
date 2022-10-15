import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  image: StaticImageData;
  isSelected: boolean;
  setSelected: () => void;
}

const ImageCard = ({ image, isSelected, setSelected }: Props) => {
  return (
    <div
      className={`relative h-full w-full ${
        isSelected ? "min-w-[1000px]" : "min-w-[0]"
      } transition-all duration-300 ease-in-out`}
      onMouseEnter={setSelected}
    >
      <div className={`${isSelected ? "bg-black/0" : "bg-black/40"} absolute w-full h-full z-10 transition-bg duration-300 ease-in-out`}/>
      <Image src={image} alt="Scenery" layout="fill" objectFit="cover" className={`${isSelected ? "scale-110" : "scale-100"} transition-transform duration-1000 ease-in-out`}/>
    </div>
  );
};

export default ImageCard;
