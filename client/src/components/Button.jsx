import "./Button.css";
import classNames from "classnames";

export const Button = ({ type, children }) => {
  const btnClass = classNames({
    button: true,
    "crud-delete": type === "delete",
    "crud-add": type === "add",
    "crud-update": type === "update",
    "crud-get": type === "search",
  });

  return <button className={btnClass}>{children}</button>;
};
