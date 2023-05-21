import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "../styles/Layout.module.css";

const Layout = () => {
  return (
    <>
      <header>
        <div className={styles.header_links}>
          <Link className={styles.header_link} to="/">
            Home
          </Link>
          <Link className={styles.header_link} to="/dogs">
            Dogs
          </Link>
        </div>
      </header>
      <div className={styles.main}>
        <Outlet />
      </div>
      <footer></footer>
    </>
  );
};

export default Layout;
