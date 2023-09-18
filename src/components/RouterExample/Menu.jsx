import React from "react";
import { Link, NavLink } from "react-router-dom";

function Menu() {
  return (
    <div
      style={{
        margin: "2%",
        display: "flex",
        justifyContent: "space-around",
        padding: "0",
      }}
    >
      <Link to="/">Home</Link> <br />
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "#1A5D1A" : "red",
        })}
        to="/about"
      >
        About
      </NavLink>{" "}
      <br />
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "#1A5D1A" : "red",
        })}
        to="/search"
      >
        Search
      </NavLink>{" "}
      <br />
      <NavLink
        style={({ isActive }) => ({
          color: isActive ? "#1A5D1A" : "red",
        })}
        to="/contact"
      >
        Contact
      </NavLink>{" "}
      <br />
      <NavLink
        to="/user/rahul/bhati"
        style={({ isActive }) => ({
          color: isActive ? "#1A5D1A" : "red",
        })}
      >
        User
      </NavLink>
    </div>
  );
}

export default Menu;
