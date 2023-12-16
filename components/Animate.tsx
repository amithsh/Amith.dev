"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Animate = () => {
  const textVarients = {
    initial: {
      x: -50,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggereChildren: 0.1,
      },
    },
  };

  const avataranimate = {
    initial: {
      x: 0,
      y: 0, // Set the initial y value to 0
      opacity: 1,
    },
    animate: {
      y: [2, -2, 2], // Make the avatar move between positive and negative y values
      opacity: 1, // Example opacity values, adjust as needed
      transition: {
        duration: 2, // Adjust the duration to control the speed (higher duration for slower movement)
        repeat: Infinity,
      },
    },
  };

  const social = [
    {
      name: "github",
      href: "https://github.com/amithsh",
      icon: "/github.png",
    },
    {
      name: "instagram",
      href: "https://www.instagram.com/amiths.h/",
      icon: "/Instagram.png",
    },
    {
      name: "linkdin",
      href: "https://www.linkedin.com/in/amith-s-h-954853203/",
      icon: "/Linkedin.png",
    },
    {
      name: "upwork",
      href: "https://www.upwork.com/freelancers/~014ceccafd9353dc11?viewMode=1",
      icon: "/upwork.png",
    },
  ];
  return (
    <div>
      <motion.div className="flex items-center flex-row justify-center mt-10 ">
        <motion.div
          className="flex flex-col  items-start justify-center w-60"
          variants={textVarients}
          initial="initial"
          animate="animate"
        >
          <span className="font-bold text-5xl absolute mt-10 py-20  top-0 whitespace-break-spaces">
            Lets create
          </span>
          <motion.h1 className="text-7xl " variants={textVarients}>
            Amith
          </motion.h1>
          <motion.h2 className="font-light " variants={textVarients}>
            freelancer fullstack developer based in banglore, India
          </motion.h2>
          <motion.div
            className="flex flex-row items-start justify-center relative mt-10 gap-4"
            variants={textVarients}
          >
            {social.map((route) => (
              <Link href={route.href} key={route.name} legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                    src={route.icon}
                    alt={route.name}
                    width={35}
                    height={35}
                  />
                </a>
              </Link>
            ))}
          </motion.div>
        </motion.div>

        <motion.img
          variants={avataranimate}
          initial="initial"
          animate={"animate"}
          className="relative -right-20"
          src={"/avatar.png"}
          alt="avatar"
          width={400}
          height={50}
        />
      </motion.div>
    </div>
  );
};

export default Animate;
