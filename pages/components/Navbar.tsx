import React, { useState } from "react";
import Link from "next/link";

interface Props {}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-0 w-screen h-20">
        <ul className="flex flex-col gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/About">About</Link>
          </li>
          <li>
            <Link href="/Products">Products</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
