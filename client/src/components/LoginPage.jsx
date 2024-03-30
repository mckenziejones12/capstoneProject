import "./LoginPage.css";
import { useNavigate } from "react-router";

export const LoginPage = () => {
  const navigate = useNavigate();
  const handleCreateNewAccountClick = () => {
    navigate("/register");
  };
  return (
    <>
      <div className="loginContent">
        <div className="loginTitle">Capstone Records</div>
        <div className="loginFields">
          <form className="loginForm" action="">
            <div className="loginField">
              <label className="loginFieldTitle" htmlFor="userNameLogin">
                Username
              </label>
              <input
                type="text"
                className="loginFieldInput"
                name="userNameLogin"
                required
              />
            </div>
            <div className="loginField">
              <label className="loginFieldTitle" htmlFor="passwordLogin">
                Password
              </label>
              <input
                type="password"
                className="loginFieldInput"
                name="passwordLogin"
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
