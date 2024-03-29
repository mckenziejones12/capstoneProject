import "./LoginPage.css";

export const LoginPage = () => {
  return (
    <>
      <div className="loginContent">
        <div className="loginTitle">Capstone Records</div>
        <div className="loginFields">
          <form className="loginForm" action="">
            <div className="loginField">
              <label className="loginFieldTitle" htmlFor="userNameLogin">
                Username:
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
                Password:
              </label>
              <input
                type="password"
                className="loginFieldInput"
                name="passwordLogin"
                required
              />
            </div>
            <button type="submit" value="Login" id="loginButton">
              Log In
            </button>
            <div className="createLoginLink">
              <a href="" className="createLoginLink">
                Create New Account
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
