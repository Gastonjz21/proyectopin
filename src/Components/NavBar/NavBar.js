import React from "react";
import "./navbar.css";
import Logos from "../../logo.json";

function NavBar() {
  return (
    <div className="navegacion">
      <div className="">
        {Logos &&
          Logos.map((logo) => {
            return <img src={logo.img} alt="" className="logo" />;
          })}
      </div>
      <div className="links">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Products</a>
        <a href="/">Services</a>
        <a href="/">Contact</a>
      </div>
    </div>
  );
}

export default NavBar;
