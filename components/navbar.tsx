import React from "react";
import { Aclonica } from "next/font/google";
import Link from "next/link";
import { MainNav } from "./main-nav";
import { Button } from "./ui/button";

const aclonica = Aclonica({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-logo",
});

const Navbar = () => {
  return (
    <div className="w-full h-12 bg-black shadow-lg backdrop-filter backdrop-blur-3xl items-center flex opacity-95 rounded-sm flex-row justify-between px-9">
      <div className="flex items-center justify-center ">
        <div className={aclonica.className}>
          <Link href={"/"}>
            <h1 className="text-white text-xl ">Amith.dev</h1>
          </Link>
        </div>
      </div>
     <div className="px-7 flex flex-row items-center gap-5 ">
      <MainNav />
      <Button variant={"destructive"}>
        Contact me
      </Button>
     </div>
    </div>
  );
};

export default Navbar;
