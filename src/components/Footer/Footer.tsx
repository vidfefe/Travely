import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="my-16 pt-6 w-[70%] sm:w-[82%] xl:w-[90%] mx-auto flex justify-between items-center text-gray-500 text-sm border-t border-gray-500">
      <p>Copyright © 2025 Victoria Korneichuk. All Rights Reserved</p>
      <div className="flex items-center gap-2">
        <span>Socials: </span>
        <Link href="https://t.me/vikakak09">
          <FaTelegram
            size={20}
            className="transition-all duration-300 hover:text-blue-950"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/victoria-korneichuk-748b782a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
          <FaLinkedin
            size={20}
            className="transition-all duration-300 hover:text-blue-950"
          />
        </Link>
        <Link href="https://github.com/vidfefe">
          <FaGithub
            size={20}
            className="transition-all duration-300 hover:text-blue-950"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
