import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { Ubuntu } from "next/font/google";

const font = Ubuntu({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  return (
    <nav className="px-6 bg-[#FFFFFF30]">
      <div className="flex justify-between items-center h-16 w-full">
        <Link href="/">
          <div className={`${font.className} text-3xl dark:text-amber-50`}>
            Brand
            <span className="text-pink-500">Wave</span>
          </div>
        </Link>
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default Navbar;
