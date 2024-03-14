import "./Button.css";
import classNames from "classnames";

export const Button = ({ type, children }) => {
  const btnClass = classNames({
    button: true,
    "button delete": type === "delete",
    "button add": type === "add",
    "button update": type === "update",
    "button search": type === "search",
  });

  return <button className={btnClass}>{children}</button>;
};
