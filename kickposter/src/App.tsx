import "./App.css";
import UserSidebar from "./components/UserSidebar/UserSidebar";
import PostsContainer from "./components/PostsContainer/PostsContainer";
import { loadInitialData } from "./utils";
import { useState } from "react";
import LoginPage from "./components/LoginPage/LoginPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import { User } from "./types";

function App() {
  loadInitialData();
  const [user, setUser] = useState<User | null>(null)
  const [registering, setRegistering] = useState<boolean>(false)
  return (
    <div className="App-container">
      {registering && <SignUpPage exitRegistering={() => setRegistering(false)}/>}
      {!user && !registering && <LoginPage handleLogin={(user: User) => setUser(user)} handleRegister={() => setRegistering(true)}/>}
      {user && 
        <UserSidebar handleLogout = {() => setUser(null)} user = {user}/>}
      {user &&
        <PostsContainer />}
    </div>
  );
}

export default App;
