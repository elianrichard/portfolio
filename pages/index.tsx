import { useEffect, useMemo, useState } from "react";
import type { NextPage } from "next";
import { StaticImageData } from "next/image";
import { server } from "../config";
import { motion, useAnimationControls, Variants } from "framer-motion";
import _ from "lodash";

import { IconContext } from "react-icons";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import Image1 from "../public/images/image1.webp";
import Image2 from "../public/images/image2.webp";
import Image3 from "../public/images/image3.webp";
import Image4 from "../public/images/image4.webp";
import Image5 from "../public/images/image5.webp";
import Image6 from "../public/images/image6.webp";
import Image7 from "../public/images/image7.webp";
import Image8 from "../public/images/image8.webp";

import ImageCard from "../components/Home/ImageCard";

const articles = [
  { image: Image1, category: "UI/UX Design", title: "Facebook Landing Page" },
  { image: Image2, category: "Web Development", title: "Twitter Account" },
  { image: Image3, category: "Branding Logo", title: "Instagram" },
  { image: Image4, category: "3D animation", title: "School of Motion" },
  { image: Image5, category: "Photography", title: "Amazon" },
  { image: Image6, category: "Craft CMS", title: "Wordpress" },
  { image: Image7, category: "Interface Design", title: "Subway" },
  { image: Image8, category: "Lettering", title: "Adobe" },
];

interface Props {
  articles: Array<ArticlesRes>;
}

interface ArticlesRes {
  id: number;
  title: string;
  category: string;
  image: StaticImageData;
}

const Home = () => {
  // const Home = ({ articles }: Props) => {
  const [selectedCard, setSelectedCard] = useState<number>(0);
  const [pageNum, setPageNum] = useState<number>(0);
  const pageTotal = Math.floor(articles.length / 5);

  const showLists = useMemo(() => {
    const lists = articles.slice(pageNum * 5, (pageNum + 1) * 5);
    return lists;
  }, [pageNum]);
  // }, [articles, pageNum]);

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
            value={{
              className: `text-white text-2xl bg-white/20 p-1 rounded-full`,
            }}
          >
            <motion.div
              whileHover={pageNum ? { scale: 1.5 } : {}}
              whileTap={pageNum ? { scale: 1.3 } : {}}
            >
              <MdKeyboardArrowLeft
                onClick={async () => {
                  if (!pageNum) return;
                  await containerControl.start("exit");
                  setPageNum(pageNum - 1);
                  await containerControl.start("hidden");
                  await containerControl.start("show");
                }}
                className={
                  pageNum ? "cursor-pointer hover:bg-mainRed/40" : "opacity-50"
                }
              />
            </motion.div>
            <p className="flex w-20 items-end justify-center gap-2 text-5xl text-white">
              {pageNum + 1}
              <span className="text-xl"> / {pageTotal + 1}</span>
            </p>
            <motion.div
              whileHover={pageNum !== pageTotal ? { scale: 1.5 } : {}}
              whileTap={pageNum !== pageTotal ? { scale: 1.3 } : {}}
            >
              <MdKeyboardArrowRight
                onClick={async () => {
                  if (pageNum === pageTotal) return;
                  await containerControl.start("exit");
                  setPageNum(pageNum + 1);
                  await containerControl.start("hidden");
                  await containerControl.start("show");
                }}
                className={
                  pageNum !== pageTotal
                    ? "cursor-pointer hover:bg-mainRed/40"
                    : "opacity-50"
                }
              />
            </motion.div>
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

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/articles`);
//   const articles = await res.json();

//   return {
//     props: { articles },
//   };
// };
