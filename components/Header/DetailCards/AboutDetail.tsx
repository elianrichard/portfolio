import React from "react";

const AboutDetail = () => {
  return (
    <div className="flex h-full flex-col justify-start gap-5">
      <div className="text-3xl font-medium">
        <p>Genuine</p>
        <p>Competence</p>
        <p>Commitment</p>
      </div>
      <p className="text-sm text-paleBlack">
        Currently I&apos;m a freelance designer and web developer, who works
        with a variety of clients and on many diverse projects.
      </p>
      <p className="text-sm text-paleBlack">
        I work to create innovative solutions that inspire, and foster memorable
        relationships between brands and their clients. With a focus on branding
        and UI / Web, I strive to create usable and polished products through
        passionate and deliberate design.
      </p>
      <a
        href={"#"}
        target="_blank"
        rel="noreferrer"
        className="text-paleBlack transition-all duration-300 ease-out hover:text-mainRed"
      >
        VIEW RESUME
      </a>
    </div>
  );
};

export default AboutDetail;
