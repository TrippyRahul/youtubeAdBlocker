"use client";

import React, { useState } from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.links}>
          <li className={styles.logo}>
            <Link href="/">
              <img src="./navbar-logo.svg" alt="youtube-ad-blocker-logo" />
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="/">YOUTUBE AD BLOCKER</Link>
          </li>
          <li className={styles.link}>
            <Link href="/">ABOUT YOUTUBE AD BLOCKER</Link>
          </li>
          <li className={styles.link}>
            <Link href="/">FAQ</Link>
          </li>
        </ul>

        <div
          className={`${styles.mobileMenuBtn}  ${isOpen && styles.animate}`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className={`${styles.line} ${styles.firstLine}`}></span>
          <span className={`${styles.line} ${styles.middleLine}`}></span>
          <span className={`${styles.line} ${styles.lastLine}`}></span>
        </div>
      </nav>

      {isOpen && (
        <div className={styles.mobile}>
          <ul className={styles.links}>
            <li className={styles.link}>
              <Link href="/">YOUTUBE AD BLOCKER</Link>
            </li>
            <li className={styles.link}>
              <Link href="/">ABOUT YOUTUBE AD BLOCKER</Link>
            </li>
            <li className={styles.link}>
              <Link href="/">FAQ</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
