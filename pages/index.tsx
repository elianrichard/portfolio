import type { NextPage } from "next";
import { useCallback, useEffect, useMemo, useState } from "react";
import _ from "lodash";

import Image1 from "../asset/images/image1.webp";
import Image2 from "../asset/images/image2.webp";
import Image3 from "../asset/images/image3.webp";
import Image4 from "../asset/images/image4.webp";
import Image5 from "../asset/images/image5.webp";

import ImageCard from "../components/Home/ImageCard";

const Home: NextPage = () => {
  const [selectedCard, setSelectedCard] = useState<number>(0);
  const imageList = [Image1, Image2, Image3, Image4, Image5];

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
          image={el}
          key={i}
          isSelected={i === selectedCard}
          setSelected={() => debounceSelected(i)}
        />
      ))}
    </div>
  );
};

export default Home;
