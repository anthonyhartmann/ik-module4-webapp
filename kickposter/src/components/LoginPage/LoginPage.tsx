import React from "react";
import { User } from "../../types";
import "./LoginPage.css";

interface LoginProps {
  handleLogin: (user: User) => void;
  handleRegister: () => void;
}

const LoginPage: React.FC<LoginProps> = (props: LoginProps) => {
  const [passwordError, setPasswordError] = React.useState<string>("");
  const [usernameError, setUsernameError] = React.useState<string>("");

  const [usernameInput, setUsernameInput] = React.useState<string>("");
  const [passwordInput, setPasswordInput] = React.useState<string>("");

  // This could be used, somehow... Fun fact: the set function that comes with React state variables
  // has to be used in order to update the variable, so just using set on a map won't update it properly.
  const [timesSinceLastAttempt, setTimesSinceLastAttempt] = React.useState<
    Map<string, number>
  >(new Map());

  function handleUsernameChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setUsernameInput(event.target.value);
  }

  function handlePasswordChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setPasswordInput(event.target.value);
  }

  function handleFormSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    setUsernameError("");
    setPasswordError("");
    if (!usernameInput) {
      setUsernameError("Username is missing!");
      return;
    } else if (!passwordInput) {
      setPasswordError("Password is missing!");
      return;
    }
    // TODO: might want to add rate-limiting here!
    const users = localStorage.getItem("users");
    const usersDeserialized: User[] = users ? JSON.parse(users!!) : [];
    const dbUser: User | undefined = usersDeserialized.find((user) => {
      return user.username == usernameInput;
    });
    if (!dbUser) {
      setUsernameError("Username doesn't exist!");
      return;
    }
    if (dbUser.password == passwordInput) {
      dbUser.loggedIn = true;
      localStorage.setItem("users", JSON.stringify(usersDeserialized));
      props.handleLogin(dbUser!!);
    } else {
      setPasswordError("Password doesn't match!");
      return;
    }
  }

  return (
    <div className="Login-page">
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username-field">Username:</label>
          <br />
          <input
            id="username-field"
            value={usernameInput}
            onChange={handleUsernameChange}
          />
          <span hidden={!usernameError}> {usernameError} </span>
        </div>
        <div>
          <label htmlFor="password-field">Password:</label>
          <br />
          <input
            id="password-field"
            value={passwordInput}
            onChange={handlePasswordChange}
          />
          <span hidden={!passwordError}> {passwordError} </span>
        </div>
        <button>login</button>
        <p>
          Not registered?{" "}
          <button onClick={props.handleRegister}>Create an account</button>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
