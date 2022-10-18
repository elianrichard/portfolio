import React from "react";
import { motion, Variants } from "framer-motion";

interface Props {
  isAnimated: boolean;
}

const ContactDetail = ({ isAnimated }: Props) => {
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

  const contactDetails = [
    ["hello@alphaproject.com", "mailto:hello@alphaproject.com"],
    ["(607) 467-1254", "tel:6074671254"],
    ["30548 State 17th Hwy", "https://maps.google.com"],
    ["Deposit, New York (NY), 13754", ""],
  ];

  return (
    <motion.div
      initial={"hidden"}
      animate={isAnimated ? "show" : ""}
      variants={containerVar}
      className="flex flex-col gap-10"
    >
      <motion.div
        variants={childrenVar}
        transition={childrenTransition}
        className="text-3xl font-medium"
      >
        <p>Having a Project in Mind?</p>
        <p>Let&apos;s Collaborate.</p>
      </motion.div>
      <div className="flex flex-col gap-1 text-sm text-paleBlack">
        <motion.p
          variants={childrenVar}
          transition={childrenTransition}
          className="mb-3 font-medium uppercase tracking-widest"
        >
          GET IN TOUCH
        </motion.p>
        {contactDetails.map((el, i) => {
          if (el[1])
            return (
              <motion.a
                href={el[1]}
                target="_blank"
                rel="norefferer"
                key={i}
                className="w-fit transition-all duration-300 ease-out hover:text-mainRed"
                variants={childrenVar}
                transition={childrenTransition}
              >
                {el[0]}
              </motion.a>
            );
          else
            return (
              <motion.p
                variants={childrenVar}
                transition={childrenTransition}
                key={i}
              >
                {el[0]}
              </motion.p>
            );
        })}
      </div>
    </motion.div>
  );
};

export default ContactDetail;
