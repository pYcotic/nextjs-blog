import React from "react";
import styles from "../styles/navbar.module.css";
import NavLink from "./navlink";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Navbar(): JSX.Element {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
    console.log(!open);
  };

  const navLinks = (
    <>
      <NavLink onClick={toggle} href="/posts" >POSTS</NavLink>
      <NavLink onClick={toggle} href="/portfolio">PORTFOLIO</NavLink>
      <NavLink onClick={toggle} href="/testimonials">TESTIMONIALS</NavLink>
      <NavLink onClick={toggle} href="/contact">CONTACT</NavLink>
    </>
  );
  
  
  return (
      // <div className={styles.navbarWrapper}>
        <div className={styles.navbar}>
        <Link href='/' className={styles.logo}>MARCOJS</Link>
          <div className={styles.links}>
              {navLinks}
          </div>
          <section className={styles.burgerMenu}>
            <nav id='navbar' className={styles.menuWrapper} role="navigation">
              <FontAwesomeIcon icon={open ? faTimes : faBars} size="2x" className={styles.faBars} onClick={toggle}/>
              <nav className={open ? styles.openDropMenu : styles.dropMenu}>
                {navLinks}
              </nav>
            </nav>
          </section>
          
        </div>
      // </div>
  );
};
