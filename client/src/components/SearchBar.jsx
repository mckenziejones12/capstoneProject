import { Button } from "./Button";
import "./SearchBar.css";

export const SearchBar = ({ onSearch }) => {
  return (
    <div id="searchbar">
      <input
        type="text"
        name="findPatient"
        placeholder="Find by last name"
        onChange={(e) => onSearch(e.target.value)}
      />
      <Button type="search">Find</Button>
    </div>
  );
};
