import "./LoginPage.css";

export const CreateNewAccountPage = () => {
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
            <div className="loginField">
              <label className="loginFieldTitle" htmlFor="passwordLogin">
                Confirm Password
              </label>
              <input
                type="password"
                className="loginFieldInput"
                id="confirmPassword"
                name="passwordLogin"
                required
              />
            </div>
            <div className="loginField">
              <label className="loginFieldTitle" htmlFor="admin">
                Is this an admin role?
              </label>
              <select name="admin" id="admin">
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
