import { useState } from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

export default function MobileHeader() {
  const [showMenu, setShowMenu] = useState(false);

  function handleChildClick() {
    setShowMenu(false);
  }

  return (
    <section className="md:hidden flex justify-between px-8 py-5">
      <div className="w-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-auto mr-14">
            <Link href="/">
              <img src="gradia-assets/logos/gradia-name-white.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
      <button
        className="md:hidden rounded-md focus:outline-none focus:shadow-outline-blue"
        aria-label="Main menu"
        onClick={() => setShowMenu(true)}
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {showMenu ? <MobileMenu closeMenu={handleChildClick} /> : ""}
    </section>
  );
}
