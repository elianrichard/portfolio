import { useEffect, useMemo, useState } from "react";
import type { NextPage } from "next";
import { motion, useAnimationControls, Variants } from "framer-motion";
import _ from "lodash";

import { IconContext } from "react-icons";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import Image1 from "../asset/images/image1.webp";
import Image2 from "../asset/images/image2.webp";
import Image3 from "../asset/images/image3.webp";
import Image4 from "../asset/images/image4.webp";
import Image5 from "../asset/images/image5.webp";
import Image6 from "../asset/images/image6.webp";
import Image7 from "../asset/images/image7.webp";
import Image8 from "../asset/images/image8.webp";

import ImageCard from "../components/Home/ImageCard";

const imageList = [
  { image: Image1, category: "UI/UX Design", title: "Facebook Landing Page" },
  { image: Image2, category: "Web Development", title: "Twitter Account" },
  { image: Image3, category: "Branding Logo", title: "Instagram" },
  { image: Image4, category: "3D animation", title: "School of Motion" },
  { image: Image5, category: "Photography", title: "Amazon" },
  { image: Image6, category: "Craft CMS", title: "Wordpress" },
  { image: Image7, category: "Interface Design", title: "Subway" },
  { image: Image8, category: "Lettering", title: "Adobe" },
];

const Home: NextPage = () => {
  const [selectedCard, setSelectedCard] = useState<number>(0);
  const [pageNum, setPageNum] = useState<number>(0);
  const pageTotal = Math.floor(imageList.length / 5);

  const showLists = useMemo(() => {
    const lists = imageList.slice(pageNum * 5, (pageNum + 1) * 5);
    return lists;
  }, [pageNum]);

  useEffect(() => {
    setSelectedCard(0);
  }, [pageNum]);

  const debounceSelected = useMemo(
    () => _.debounce((i: number) => setSelectedCard(i), 200),
    []
  );
  useEffect(() => {
    return () => debounceSelected.cancel();
  }, [debounceSelected]);

  const containerControl = useAnimationControls();

  const containerVar: Variants = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  const childrenVar: Variants = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  };

  containerControl.start("show");
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black pl-20">
      {pageTotal > 0 && (
        <div className="absolute right-10 bottom-10 z-50 flex items-center justify-center gap-5">
          <IconContext.Provider
            value={{ className: "text-white text-xl cursor-pointer" }}
          >
            <MdKeyboardArrowLeft
              onClick={async () => {
                if (!pageNum) return;
                await containerControl.start("exit");
                setPageNum(pageNum - 1);
                await containerControl.start("hidden");
                await containerControl.start("show");
              }}
            />
            <p className="flex w-20 justify-center text-5xl text-white items-end gap-2">
              {pageNum + 1}
              <span className="text-xl"> / {pageTotal + 1}</span>
            </p>
            <MdKeyboardArrowRight
              onClick={async () => {
                if (pageNum === pageTotal) return;
                await containerControl.start("exit");
                setPageNum(pageNum + 1);
                await containerControl.start("hidden");
                await containerControl.start("show");
              }}
            />
          </IconContext.Provider>
        </div>
      )}
      <motion.div
        variants={containerVar}
        initial="hidden"
        animate={containerControl}
        className="flex h-full w-full"
      >
        {showLists.map((el, i) => (
          <ImageCard
            key={pageNum * 5 + i}
            data={el}
            childrenDivVar={childrenVar}
            indexing={{ index: i, cardCount: showLists.length, pageNum }}
            isSelected={i === selectedCard}
            setSelected={() => debounceSelected(i)}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Home;
