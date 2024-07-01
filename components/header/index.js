import React from "react";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";
const Header = () => {
  return (
    <header>
      <div>
        <Link href="/">
          <FaPlayCircle /> NETFILMS
        </Link>
      </div>
    </header>
  );
};

export default Header;
