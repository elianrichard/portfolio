import type { NextPage } from "next";
import { useEffect, useMemo, useState } from "react";
import _ from "lodash";

import Image1 from "../asset/images/image1.webp";
import Image2 from "../asset/images/image2.webp";
import Image3 from "../asset/images/image3.webp";
import Image4 from "../asset/images/image4.webp";
import Image5 from "../asset/images/image5.webp";

import ImageCard from "../components/Home/ImageCard";

const Home: NextPage = () => {
  const [selectedCard, setSelectedCard] = useState<number>(0);
  const imageList = [
    { image: Image1, category: "UI/UX Design", title: "Facebook Landing Page" },
    { image: Image2, category: "Web Development", title: "Twitter Account" },
    { image: Image3, category: "Branding Logo", title: "Instagram" },
    { image: Image4, category: "3D animation", title: "School of Motion" },
    { image: Image5, category: "Photography", title: "St. Petersburg" },
  ];

  const debounceSelected = useMemo(
    () => _.debounce((i: number) => setSelectedCard(i), 200),
    []
  );

  useEffect(() => {
    return () => debounceSelected.cancel();
  }, [debounceSelected]);

  return (
    <div className="flex h-screen w-full bg-black pl-20">
      {imageList.map((el, i) => (
        <ImageCard
          key={i}
          data={el}
          index={i}
          count={imageList.length}
          isSelected={i === selectedCard}
          setSelected={() => debounceSelected(i)}
        />
      ))}
    </div>
  );
};

export default Home;
