import React from "react";
import Image from "next/image";
import { articles, ArticleType } from "../../data";
import { IconContext } from "react-icons";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import Link from "next/link";

interface Props {
  articlesData: ArticleType;
  firstID: number;
  lastID: number;
}

const Layout = ({ articlesData, firstID, lastID }: Props) => {
  return (
    <div className="pl-20">
      <div className="flex w-full flex-col items-center">
        <div className="relative h-[75vh] w-full">
          <Image
            src={articlesData.image}
            alt={articlesData.title}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <div className="absolute h-full w-full" />
          <div className="absolute flex h-full w-full">
            <div className="flex h-full w-full justify-between">
              <Link
                href={`/work/${
                  firstID != articlesData.id ? articlesData.id - 1 : lastID
                }`}
              >
                <div className="flex h-full cursor-pointer items-center bg-black/20 p-5 text-white/70 transition-all duration-200 ease-out hover:bg-black/50 hover:text-white">
                  <IconContext.Provider value={{ className: "text-5xl" }}>
                    <IoMdArrowDropleft />
                  </IconContext.Provider>
                </div>
              </Link>
              <Link
                href={`/work/${
                  lastID != articlesData.id ? articlesData.id + 1 : firstID
                }`}
              >
                <div className="flex h-full cursor-pointer items-center bg-black/20 p-5 text-white/70 transition-all duration-200 ease-out hover:bg-black/50 hover:text-white">
                  <IconContext.Provider value={{ className: "text-5xl" }}>
                    <IoMdArrowDropright />
                  </IconContext.Provider>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex w-4/5 flex-col items-center justify-center gap-10 py-20">
          <div className="flex h-full flex-col gap-5">
            <div className="mb-5 flex flex-col gap-2">
              <p className="text-md uppercase text-mainRed">{articlesData.category}</p>
              <h1 className="text-5xl font-bold">{articlesData.title}</h1>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
              debitis ipsam voluptate voluptatem dignissimos pariatur explicabo
              est, accusamus odio! Blanditiis cumque ex fugiat, consequatur quos
              tenetur illum quam, ratione obcaecati quibusdam laborum placeat!
              Voluptate vero ut dolore minus aliquam. Dolor.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
              adipisci nulla saepe quos inventore doloremque fugit debitis
              facere magni minus. Eveniet omnis debitis minima ab quas,
              accusantium accusamus est iste error ullam voluptatem nihil quos,
              maxime, ipsa autem? Necessitatibus, obcaecati?
            </p>
          </div>
          <div className="grid h-[900px] w-full grid-cols-4 gap-5">
            <div className="col-span-2 h-full w-full bg-red-800"></div>
            <div className="col-span-2 row-span-2 h-full w-full bg-red-800"></div>
            <div className="h-full w-full bg-red-800"></div>
            <div className="h-full w-full bg-red-800"></div>
            <div className="col-span-2 row-span-2 h-full w-full bg-red-800"></div>
            <div className="row-span-2 h-full w-full bg-red-800"></div>
            <div className="row-span-2 h-full w-full bg-red-800"></div>
          </div>
          <div className="group flex flex-col items-center justify-center">
            <p className="mb-2 text-4xl font-bold">View Project</p>
            <div className="h-1 w-0 rounded-xl bg-mainRed transition-all duration-300 ease-in-out group-hover:w-[80%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

export const getStaticProps = (context: { params: { id: number } }) => {
  return {
    props: {
      articlesData: articles.filter(
        (article) => article.id == context.params.id
      )[0],
      firstID: articles[0].id,
      lastID: articles[articles.length - 1].id,
    },
  };
};

export const getStaticPaths = () => {
  const ids = articles.map((articles) => articles.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};
