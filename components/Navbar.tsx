"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";

const Navbar: React.FC = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [color, setColor] = useState<string>("transparent");
  const [textColor, setTextColor] = useState<string>("white");

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <header
      style={{ backgroundColor: color }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <nav className="max-w-[1240px] mx-auto flex justify-between items-center p-4">
        <Link href="/" passHref>
          <h1
            style={{ color: textColor }}
            className="font-bold text-4xl cursor-pointer transition duration-300 hover:text-gray-500"
          >
            Music In The Hood
          </h1>
        </Link>
        <ul style={{ color: textColor }} className="hidden sm:flex">
          <li className="p-4 transition duration-300 hover:text-gray-500">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 transition duration-300 hover:text-gray-500">
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li className="p-4 transition duration-300 hover:text-gray-500">
            <Link href="/work">Work</Link>
          </li>
          <li className="p-4 transition duration-300 hover:text-gray-500">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div
          onClick={handleNavToggle}
          className="block sm:hidden z-10 cursor-pointer"
        >
          {navOpen ? (
            <X size={24} color={textColor} />
          ) : (
            <Menu size={24} color={textColor} />
          )}
        </div>

        {/* Mobile Menu using Shadcn Sheet */}
        <Sheet open={navOpen} onOpenChange={setNavOpen}>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <ul className="flex flex-col items-center justify-center h-full">
              <li
                onClick={handleNavToggle}
                className="p-4 text-4xl transition duration-300 hover:text-gray-500"
              >
                <Link href="/">Home</Link>
              </li>
              <li
                onClick={handleNavToggle}
                className="p-4 text-4xl transition duration-300 hover:text-gray-500"
              >
                <Link href="/#gallery">Gallery</Link>
              </li>
              <li
                onClick={handleNavToggle}
                className="p-4 text-4xl transition duration-300 hover:text-gray-500"
              >
                <Link href="/work">Work</Link>
              </li>
              <li
                onClick={handleNavToggle}
                className="p-4 text-4xl transition duration-300 hover:text-gray-500"
              >
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Navbar;
