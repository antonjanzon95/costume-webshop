import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="absolute flex justify-end top-0 w-screen h-16 p-4 bg-slate-100">
        <Image
          src="/smaller-icon.png"
          alt="logo"
          width={120}
          height={120}
          className="absolute top-4 left-4"
        />
        <ul
          className={`${
            isMenuOpen ? "scale-100" : "scale-0"
          } z-10 absolute bg-slate-50 top-16 right-0 p-4 flex flex-col laptop:flex-row gap-4 transition-all duration-300`}
        >
          <li>
            <Link onClick={toggleMenu} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={toggleMenu} href="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={toggleMenu} href="/products">
              Products
            </Link>
          </li>
        </ul>
        <div className="flex gap-6">
          <button>cart</button>
          <button
            onClick={toggleMenu}
            className="w-10 h-8 flex flex-col justify-between"
          >
            <div
              className={`${
                isMenuOpen ? "rotate-45 translate-y-3" : ""
              } menu-line`}
            ></div>
            <div
              className={`${isMenuOpen ? "scale-0" : "scale-100"} menu-line`}
            ></div>
            <div
              className={`${
                isMenuOpen ? "rotate-[-45deg] translate-y-[-1rem]" : ""
              } menu-line`}
            ></div>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
