"use client";

import Link from "next/link";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { TbAirBalloon } from "react-icons/tb";

const Navbar = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [navbarBg, setNavbarBg] = React.useState(false);

  React.useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 100) setNavbarBg(true);
      else setNavbarBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  });

  return (
    <header
      className={`absolute top-0 left-0 w-full z-50 ${
        navbarBg ? "bg-blue-950" : "none"
      } fixed h-[10vh] transition-all duration-400`}
    >
      <div className="w-[70%] sm:w-[82%] xl:w-[90%] mx-auto flex items-center justify-between h-full">
        <Link href="/">
          <div className=" flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-rose-500">
              <TbAirBalloon className="w-7 h-7" />
            </div>
            <h1 className="text-white uppercase text-4xl font-bold">Travely</h1>
          </div>
        </Link>
        <div className="relative">
          <AiOutlineUser
            onClick={() => setShowModal((prev) => !prev)}
            className="w-7 h-7 cursor-pointer"
          />

          <div
            className={`absolute left-1/2 -translate-x-1/2 mt-3 p-4 rounded-lg bg-rose-500 shadow-lg flex flex-col gap-4 transition-all duration-300 transform ${
              showModal
                ? "opacity-100 scale-100 cursor-pointer"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <Link href="/reservations">Reservations</Link>
            <button>Logout</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
