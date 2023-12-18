"use client";

import React from "react";
import ClientOnly from "./Clientonly";

const Footer = () => {
  return (
    <ClientOnly>
      <div className="h-auto w-screen sm:h-auto sm:w-full bg-black">
        <div className="flex flex-row items-center justify-center text-white font-light text-sm">
          &copy; {new Date().getFullYear()} Amith.dev
        </div>
      </div>
    </ClientOnly>
  );
};

export default Footer;
