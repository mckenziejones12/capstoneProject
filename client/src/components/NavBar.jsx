import React from "react";
import { Button } from "./Button";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <div id="header">
      <div id="title">Capstone Records</div>
      <div id="searchbar">
        <input type="text" name="findPatient" placeholder="Find by last name" />
        <Button type="search">Find</Button>
      </div>
    </div>
  );
};
