import React from "react";
import { Button } from "./Button";
import { useNavigate } from "react-router";
import "./NavBar.css";

export const NavBar = () => {
  const navigate = useNavigate();
  const handleHomepageClick = () => {
    navigate(`/`);
  };
  return (
    <div id="header">
      <div
        id="title"
        style={{ cursor: "pointer" }}
        onClick={handleHomepageClick}
      >
        Capstone Records
      </div>
      <div id="searchbar">
        <input type="text" name="findPatient" placeholder="Find by last name" />
        <Button type="search">Find</Button>
      </div>
    </div>
  );
};
