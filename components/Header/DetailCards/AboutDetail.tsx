import React from "react";
import { motion, AnimationControls, Variants } from "framer-motion";

interface Props {
  isAnimated: boolean;
}

const AboutDetail = ({ isAnimated }: Props) => {
  const containerVar: Variants = {
    show: {
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };
  const childrenVar: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0 },
  };
  const childrenTransition = { bounce: 0, duration: isAnimated ? 0.2 : 0.5 };

  return (
    <motion.div
      variants={containerVar}
      initial="hidden"
      animate={isAnimated ? "show" : ""}
      className="flex h-full flex-col justify-start gap-5"
    >
      <motion.div
        variants={childrenVar}
        transition={childrenTransition}
        className="text-3xl font-medium"
      >
        <p>Genuine</p>
        <p>Competence</p>
        <p>Commitment</p>
      </motion.div>
      <motion.p
        variants={childrenVar}
        transition={childrenTransition}
        className="text-sm text-paleBlack"
      >
        Currently I&apos;m a freelance designer and web developer, who works
        with a variety of clients and on many diverse projects.
      </motion.p>
      <motion.p
        variants={childrenVar}
        transition={childrenTransition}
        className="text-sm text-paleBlack"
      >
        I work to create innovative solutions that inspire, and foster memorable
        relationships between brands and their clients. With a focus on branding
        and UI / Web, I strive to create usable and polished products through
        passionate and deliberate design.
      </motion.p>
      <motion.a
        variants={childrenVar}
        transition={childrenTransition}
        href={"#"}
        target="_blank"
        rel="noreferrer"
        className="text-paleBlack transition-all duration-300 ease-out hover:text-mainRed"
      >
        VIEW RESUME
      </motion.a>
    </motion.div>
  );
};

export default AboutDetail;
