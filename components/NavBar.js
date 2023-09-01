"use client";

import { useState } from "react";
import styles from "@/app/nav.module.css";
import Image from "next/image";
import Link from "next/link";

// const navigationLinksData = [
//   {
//     pageName: "Home",
//     pagePath: "/",
//     clickHandler: "handleClick"
//   },
//   {
//     pageName: "Art Gallery",
//     pagePath: "/artgallery",
//   },
//   {
//     pageName: "Apparel",
//     pagePath: "/apparel",
//   },
//   {
//     pageName: "About Us",
//     pagePath: "#",
//   },
//   {
//     pageName: "Get in Touch",
//     pagePath: "/contact",
//   },
// ];

// const navigationLinks = navigationLinksData.map((links) => {
//   return(<Link href={links.pagePath} className={styles.linkName}>
//     {links.pageName}
//   </Link>)
// });

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    menuOpen
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.hamburgerWrapper}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={styles.hamburger}
        onClick={handleClick}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      {menuOpen ? (
        <div className={styles.openMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={styles.closeIcon}
            onClick={handleClick}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <div className={styles.contentWrapper}>
            <div className={styles.navigationLinks}>
              <div className={styles.linkWrapper}>
                <Link
                  href="/"
                  className={styles.linkName}
                  onClick={handleClick}
                >
                  Home
                </Link>
                <Link
                  href="/art"
                  className={styles.linkName}
                  onClick={handleClick}
                >
                  Art Gallery
                </Link>
                <Link
                  href="/apparel"
                  className={styles.linkName}
                  onClick={handleClick}
                >
                  Apparel
                </Link>
                <Link
                  href="#"
                  className={styles.linkName}
                  onClick={handleClick}
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className={styles.linkName}
                  onClick={handleClick}
                >
                  Get in touch
                </Link>
                {/* {navigationLinks} */}
              </div>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/BerryTreeesLogo.png"
                fill
                alt="BerryTrees Logo"
                className={styles.image}
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
}
