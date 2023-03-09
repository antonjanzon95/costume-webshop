import React, { useState } from "react";
import Link from "next/link";

interface Props {}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="absolute flex justify-between top-0 w-screen h-20 p-4">
        <ul
          className={`${
            isMenuOpen ? "scale-100" : "scale-0"
          } flex flex-col mt-6 laptop:flex-row gap-4 transition-all duration-300`}
        >
          <li>
            <Link onClick={toggleMenu} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={toggleMenu} href="/About">
              About
            </Link>
          </li>
          <li>
            <Link onClick={toggleMenu} href="/Products">
              Products
            </Link>
          </li>
        </ul>
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
      </nav>
    </>
  );
};

export default Navbar;
