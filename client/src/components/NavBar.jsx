import React from "react";

const NavBar = () => {
  return (
    <div id="header">
      <div id="title">Capstone Dental</div>
      <div id="searchbar">
        <input type="text" placeholder="Search patient by last name" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default NavBar;
