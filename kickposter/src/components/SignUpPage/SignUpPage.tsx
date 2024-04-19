import React from "react";
import { User } from "../../types";
import UserSidebar from "../UserSidebar/UserSidebar";
import "./SignUpPage.css";

interface SignUpProps {
  exitRegistering: () => void
}

const SignUpPage: React.FC<SignUpProps> = (props: SignUpProps) => {

  const [passwordError, setPasswordError] = React.useState<string>("")
  const [usernameError, setUsernameError] = React.useState<string>("")

  const [usernameInput, setUsernameInput] = React.useState<string>("")
  const [passwordInput, setPasswordInput] = React.useState<string>("")

  function handleUsernameChange(event: { target: { value: React.SetStateAction<string>; }; }) {
    setUsernameInput(event.target.value)
  }

  function handlePasswordChange(event: { target: { value: React.SetStateAction<string>; }; }) {
    setPasswordInput(event.target.value)
  } 

  function handleFormSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault()
    setUsernameError("")
    setPasswordError("")
    if (!usernameInput) {
      setUsernameError("Username is missing!")
      return
    } else if (!passwordInput) {
      setPasswordError("Password is missing!")
      return
    }

    /* TODO: should probably add some restriction to these passwords. */
    
    const users = localStorage.getItem("users")
    const usersDeserialized: User[] = users ? JSON.parse(users!!) : []
    usersDeserialized.push({
      id: usersDeserialized.length,
      username: usernameInput,
      password: passwordInput,
      loggedIn: true
    })
    localStorage.setItem("users", JSON.stringify(usersDeserialized))
    props.exitRegistering()
  }

  return (
    <div className="SignUp-page">
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username-field">Username:</label><br/>
          <input id="username-field" value={usernameInput} onChange={handleUsernameChange}/>
          <span hidden={!usernameError}> {usernameError} </span>
        </div>
        <div>
          <label htmlFor="password-field">Password:</label><br/>
          <input id="password-field" value={passwordInput} onChange={handlePasswordChange}/>
          <span hidden={!passwordError}> {passwordError} </span>
        </div>
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
