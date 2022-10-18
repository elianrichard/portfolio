import type { NextPage } from "next";
import { useEffect, useMemo, useState } from "react";
import _ from "lodash";

import Image1 from "../asset/images/image1.webp";
import Image2 from "../asset/images/image2.webp";
import Image3 from "../asset/images/image3.webp";
import Image4 from "../asset/images/image4.webp";
import Image5 from "../asset/images/image5.webp";

import ImageCard from "../components/Home/ImageCard";

const imageList = [
  { image: Image1, category: "UI/UX Design", title: "Facebook Landing Page" },
  { image: Image2, category: "Web Development", title: "Twitter Account" },
  { image: Image3, category: "Branding Logo", title: "Instagram" },
  { image: Image4, category: "3D animation", title: "School of Motion" },
  { image: Image5, category: "Photography", title: "Amazon" },
  { image: Image4, category: "Craft CMS", title: "Wordpress" },
  { image: Image3, category: "Interface Design", title: "Subway" },
  { image: Image2, category: "Lettering", title: "Adobe" },
];

const Home: NextPage = () => {
  const [selectedCard, setSelectedCard] = useState<number>(0);
  const [pageNum, setPageNum] = useState<number>(0);
  const pageTotal = imageList.length / 5;

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

  return (
    <div className="relative flex h-screen w-full bg-black pl-20">
      <div className="absolute right-10 bottom-10 z-50 flex gap-5">
        <button
          className="bg-red-900 p-5 text-white"
          onClick={() => {
            if (pageNum) setPageNum(pageNum - 1);
          }}
        >
          Prev
        </button>
        <button
          className="bg-red-900 p-5 text-white"
          onClick={() => {
            if (pageNum < pageTotal - 1) setPageNum(pageNum + 1);
          }}
        >
          Next
        </button>
      </div>
      {showLists.map((el, i) => (
        <ImageCard
          key={i}
          data={el}
          indexing={{ index: i, cardCount: showLists.length, pageNum }}
          isSelected={i === selectedCard}
          setSelected={() => debounceSelected(i)}
        />
      ))}
    </div>
  );
};

export default Home;
