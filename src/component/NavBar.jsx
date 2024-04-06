import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
export default function NavBar() {
  return (
    <nav>
      <ul className={style.list}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/signin">Signin</Link>
        </li>
      </ul>
    </nav>
  );
}
