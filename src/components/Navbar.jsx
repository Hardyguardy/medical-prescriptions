import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div>
      <img src={assets.logo} alt="" />
      <ul>
        <NavLink>
          <li>Home</li>
          <hr />
        </NavLink>
        <NavLink>
          <li>All Doctors</li>
          <hr />
        </NavLink>
        <NavLink>
          <li>About</li>
          <hr />
        </NavLink>
        <NavLink>
          <li>Contact</li>
          <hr />
        </NavLink>
      </ul>
      <div>
        <button>Create Account</button>
      </div>
    </div>
  );
};

export default Navbar;
