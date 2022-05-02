import "./App.css";
import UserSidebar from "./components/UserSidebar/UserSidebar";
import PostsContainer from "./components/PostsContainer/PostsContainer";
import { loadInitialData } from "./utils";
import { useState } from "react";
import LoginPage from "./components/LoginPage/LoginPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";

function App() {
  loadInitialData();
  const [loggedIn, setLoggedIn] = useState<boolean>(false)
  const [registering, setRegistering] = useState<boolean>(false)
  return (
    <div className="App-container">
      {registering && <SignUpPage exitRegistering={() => setRegistering(false)}/>}
      {!loggedIn && !registering && <LoginPage handleLogin={() => setLoggedIn(true)} handleRegister={() => setRegistering(true)}/>}
      {loggedIn && 
        <UserSidebar handleLogout = {() => setLoggedIn(false)}/>}
      {loggedIn &&
        <PostsContainer />}
    </div>
  );
}

export default App;
