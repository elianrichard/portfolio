import { useEffect, useMemo, useState } from "react";
import type { NextPage } from "next";
import { articles } from "../data";
import { motion, useAnimationControls, Variants } from "framer-motion";
import _ from "lodash";

import { IconContext } from "react-icons";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import ImageCard from "../components/Home/ImageCard";

const Home: NextPage = () => {
  const [selectedCard, setSelectedCard] = useState<number>(0);
  const [pageNum, setPageNum] = useState<number>(0);
  const pageTotal = Math.floor(articles.length / 5);

  const showLists = useMemo(() => {
    const lists = articles.slice(pageNum * 5, (pageNum + 1) * 5);
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
