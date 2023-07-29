import React from "react";
import styles from "../styles/navbar.module.css";
import NavLink from "./navlink";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Navbar(): JSX.Element {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
    console.log(!open);
  };
  
  return (
      <div className={styles.navbarWrapper}>
        <div className={styles.navbar}>

          <div className={styles.logo}>MARCOJS</div>
          
          <div className={styles.links}>
              <NavLink href="/">ABOUT</NavLink>
              <NavLink href="posts">POSTS</NavLink>
              {/* <NavLink href="portfolio">PORTFOLIO</NavLink>
              <NavLink href="testimonials">TESTIMONIALS</NavLink>
              <NavLink href="contact">CONTACT</NavLink> */}
          </div>

          {/* <div className={styles.burgerMenu}>
            {/* <FontAwesomeIcon icon={faBars} color='#A9B388' size= "2x" /> 
          </div> */}

          <section className={styles.burgerMenu}>
            <nav id='navbar' className={styles.menuWrapper} role="navigation">
              <FontAwesomeIcon icon={open ? faTimes : faBars} color='#A9B388' size="2x" className={styles.faBars} onClick={toggle}/>

              <nav className={open ? styles.openDropMenu : styles.dropMenu}>
                <NavLink href="#about">ABOUT</NavLink>
                <NavLink href="#posts">POSTS</NavLink>
                <NavLink href="#portfolio">PORTFOLIO</NavLink>
                <NavLink href="#testimonials">TESTIMONIALS</NavLink>
                <NavLink href="#contact">CONTACT</NavLink>
              </nav>
            </nav>
          </section>
        </div>
      </div>
  );
};
