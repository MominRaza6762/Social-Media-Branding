import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const showSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const hideSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <nav>
      {/* Mob Main Navbar */}
      <ul
        className={`${styles.sidebar} ${sidebarVisible ? styles.visible : ""}`}
      >
        <li onClick={hideSidebar}>
          <IoClose className={styles.closeIcon} />
        </li>
        <li>
          <Link to="/">The Bold Moves</Link>
        </li>
        <li>
          <Link to="/createyourchannel">Creating Your Own Channel</Link>
        </li>
      </ul>
      {/* Main Navbar */}
      <div className={styles.logoContainer}>
      </div>
      <ul>
        <li className={` ${styles.dropdown} ${styles.hideOnMobile}`}>
          <Link to="/" className={styles.homeList}>
            The Bold Moves
          </Link>
        </li>
        <li className={styles.hideOnMobile}>
          <Link className={styles.homeList} to="/createyourchannel">
            Creating Your Own Channel
          </Link>
        </li>
      </ul>
      <div className={styles.hideOnMobile}>
        <div className={styles.socialIcons}>
          <Link to="https://www.instagram.com/" target="_blank">
            <i>
              <FaInstagram />
            </i>
          </Link>
          <Link to="https://www.linkedin.com/feed/" target="_blank">
            <i>
              <FaLinkedin />
            </i>
          </Link>
        </div>
      </div>
      <li className={styles.menuButton} onClick={showSidebar}>
        <a>
          <IoMenu />
        </a>
      </li>
    </nav>
  );
};

export default Navbar;