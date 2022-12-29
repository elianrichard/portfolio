import React from "react";
import Image from "next/image";
import { articles, ArticleType } from "../../data";

interface Props {
  articlesData: ArticleType;
}

const Layout = ({ articlesData }: Props) => {
  return (
    <div className="pl-20">
      <div className="flex w-full flex-col items-center">
        <div className="relative h-[75vh] w-full">
          <Image
            src={articlesData.image}
            alt={articlesData.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex w-4/5 flex-col items-center justify-center gap-10 py-20">
          <div className="flex h-full flex-col gap-5">
            <h1 className="mb-5 text-5xl font-bold">{articlesData.title}</h1>
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
          <div className="group flex flex-col justify-center items-center">
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
