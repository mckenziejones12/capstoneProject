import { useState } from "react";
import { Button } from "./Button";
import "./SearchBar.css";

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleInput = (e) => {
    console.log("Search Value: ", e.target.value);
    setSearchValue({ ...searchValue, [e.target.name]: e.target.value });
  };

  return (
    <div id="searchbar">
      <input
        type="text"
        name="findPatient"
        placeholder="Find by last name"
        onChange={handleInput}
      />
      <Button type="search">Find</Button>
    </div>
  );
};
