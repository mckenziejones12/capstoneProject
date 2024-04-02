import "./LoginPage.css";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";

export const LoginPage = () => {
  const navigate = useNavigate();
  const handleCreateNewAccountClick = () => {
    navigate("/register");
  };

  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
  });

  const handleUsernameInput = (e) => {
    setUserLogin({ ...userLogin, username: e.target.value });
  };

  const handlePasswordInput = (e) => {
    setUserLogin({ ...userLogin, password: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/users", { ...userLogin }).then((response) => {
      console.log("log in was successfull");
      navigate("/");
    });
  };

  return (
    <>
      <div className="loginContent">
        <div className="loginTitle">Capstone Records</div>
        <div className="loginFields">
          <form className="loginForm" action="" onSubmit={handleSubmit}>
            <div className="loginField">
              <label className="loginFieldTitle" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                className="loginFieldInput"
                name="username"
                onChange={handleUsernameInput}
                required
              />
            </div>
            <div className="loginField">
              <label className="loginFieldTitle" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                className="loginFieldInput"
                name="password"
                onChange={handlePasswordInput}
                required
              />
            </div>
            <button type="submit" value="Login" className="loginButton">
              Log In
            </button>
          </form>
          <button
            className="loginButton createAccount"
            onClick={handleCreateNewAccountClick}
          >
            Create New Account
          </button>
        </div>
      </div>
    </>
  );
};
