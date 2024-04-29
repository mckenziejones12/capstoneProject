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

  const [registerError, setRegisterError] = useState(false);

  const handleUsernameInput = (e) => {
    setRegisterUser({ ...registerUser, username: e.target.value });
  };

  const handlePasswordInput = (e) => {
    setRegisterUser({ ...registerUser, password: e.target.value });
  };

  const handleAdminInput = (e) => {
    if (e.target.value === "Yes") {
      setRegisterUser.admin = true;
    } else {
      setRegisterUser.admin = false;
    }
    setRegisterUser({ ...registerUser, admin: setRegisterUser.admin });
  };

  const handleSubmit = (e) => {
    const password = document.getElementById("passwordLogin").value;
    const confirmedPassword = document.getElementById(
      "confirmPasswordLogin"
    ).value;
    e.preventDefault();

    if (password !== confirmedPassword) {
      alert("Please make sure passwords match");
    } else if (document.getElementById("admin").selectedIndex === 0) {
      alert("Please answer your admin position.");
    } else {
      axios
        .post("/api/users/register", { ...registerUser })
        .then((response) => {
          console.log("is anything happeining here?");
          setRegisterError(false);
          alert(
            "You have created a new account successfully. Please login with your new username and password."
          );
          navigate("/login");
        })
        .catch((error) => {
          if (error.response.status === 500) {
            setRegisterError(true);
          }
        });
    }
  };

  return (
    <>
      <div className="loginContent">
        <div className="loginTitle">Capstone Records</div>
        <div className="loginFields">
          {registerError && (
            <div
              id="registerError"
              style={{ color: "red", textAlign: "center", fontSize: "14px" }}
            >
              User already exists. Try logging in or create a new username.
            </div>
          )}
          <form className="loginForm" action="" onSubmit={handleSubmit}>
            <div className="loginField">
              <label className="loginFieldTitle" htmlFor="userNameLogin">
                Username
              </label>
              <input
                type="text"
                className="loginFieldInput"
                name="userNameLogin"
                id="userNameLogin"
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
                id="passwordLogin"
                className="loginFieldInput"
                name="passwordLogin"
                onChange={handlePasswordInput}
                required
              />
            </div>
            <div className="loginField">
              <label className="loginFieldTitle" htmlFor="confirmPasswordLogin">
                Confirm Password
              </label>
              <input
                type="password"
                className="loginFieldInput"
                id="confirmPasswordLogin"
                name="confirmPasswordLogin"
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
