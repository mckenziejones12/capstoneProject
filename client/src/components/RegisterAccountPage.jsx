import axios from "axios";
import "./LoginPage.css";
import { useState } from "react";
import { useNavigate } from "react-router";

export const RegisterAccountPage = () => {
  const navigate = useNavigate();
  const [registerUser, setRegisterUser] = useState({
    username: "",
    password: "",
    admin: Boolean,
  });

  const handleUsernameInput = (e) => {
    setRegisterUser({ ...registerUser, username: e.target.value });
  };

  const handlePasswordInput = (e) => {
    console.log("password: ", e.target.value);
    setRegisterUser({ ...registerUser, password: e.target.value });
  };

  const handleAdminInput = (e) => {
    if (e.target.value === "Yes") {
      setRegisterUser.admin = true;
    } else {
      setRegisterUser.admin = false;
    }
    console.log("is admin?: ", e.target.value);
    setRegisterUser({ ...registerUser, admin: setRegisterUser.admin });
  };

  const handleSubmit = (e) => {
    const password = document.getElementById("password").value;
    const confirmedPassword = document.getElementById("confirmPassword").value;
    e.preventDefault();
    console.log("password: ", password);
    console.log("confirmedPassword: ", confirmedPassword);

    if (password !== confirmedPassword) {
      alert("Please make sure passwords match");
    } else if (document.getElementById("admin").selectedIndex === 0) {
      alert("Please answer your admin position.");
    } else {
      axios
        .post("/api/users/register", { ...registerUser })
        .then((response) => {
          console.log("New user registered successfully.");
          alert(
            "You have created a new account successfully. Please login with your new username and password."
          );
          navigate("/login");
        });
    }
  };

  return (
    <>
      <div className="loginContent">
        <div className="loginTitle">Capstone Records</div>
        <div className="loginFields">
          <form className="loginForm" action="" onSubmit={handleSubmit}>
            <div className="loginField">
              <label className="loginFieldTitle" htmlFor="userNameLogin">
                Username
              </label>
              <input
                type="text"
                className="loginFieldInput"
                name="userNameLogin"
                onChange={handleUsernameInput}
                required
              />
            </div>
            <div className="loginField">
              <label className="loginFieldTitle" htmlFor="passwordLogin">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="loginFieldInput"
                name="passwordLogin"
                onChange={handlePasswordInput}
                required
              />
            </div>
            <div className="loginField">
              <label className="loginFieldTitle" htmlFor="passwordLogin">
                Confirm Password
              </label>
              <input
                type="password"
                className="loginFieldInput"
                id="confirmPassword"
                name="passwordLogin"
                onChange={handlePasswordInput}
                required
              />
            </div>
            <div className="loginField">
              <label className="loginFieldTitle" htmlFor="admin">
                Is this an admin role?
              </label>
              <select name="admin" id="admin" onChange={handleAdminInput}>
                <option value=""></option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <button
              type="submit"
              value="Login"
              className="loginButton createAccount"
            >
              Create Account
            </button>
          </form>
          <a href="/login">Already have an account? Log in!</a>
        </div>
      </div>
    </>
  );
};