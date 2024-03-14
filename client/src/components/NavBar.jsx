import React from "react";
import { Button } from "./Button";

const NavBar = () => {
  return (
    <div id="header">
      <div id="title">Capstone Dental</div>
      <div id="searchbar">
        <input type="text" placeholder="Search patient by last name" />
        <Button type="search">Search</Button>
      </div>
    </div>
  );
};

export default NavBar;
