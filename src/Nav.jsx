// Nav.js

import React from "react";
import styles from "./Nav.module.css"; // Import CSS module

import { Link } from "react-router-dom";

const Nav = ({ closeNavMenu }) => {
  const options = [
    {
      id: 0,
      text: "Home",
      path: "/",
    },

    {
      id: 1,
      text: "Event",
      path: "/events",
    },
    {
      id: 2,
      text: "Pre-Register",
      path: "/event",
    },
  ];

  const listOptions = options.map((option) => (
    <li key={option.id}>
      <Link to={option.path} className={styles.option} onClick={closeNavMenu}>
        {option.text}
      </Link>
    </li>
  ));

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>{listOptions}</ul>
      {/* <Link to="/event" className={styles.view_plans_btn_bar}>Register Now</Link> */}
    </nav>
  );
};

export default Nav;
