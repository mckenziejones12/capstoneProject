import React from "react";
import { useNavigate } from "react-router";
import "./Header.css";

export const Header = () => {
  const navigate = useNavigate();

  const handleHomepageClick = () => {
    navigate(`/`);
  };

  return (
    <div id="title" style={{ cursor: "pointer" }} onClick={handleHomepageClick}>
      Capstone Records
    </div>
  );
};
