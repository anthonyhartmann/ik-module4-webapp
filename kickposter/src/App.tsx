import "./App.css";
import UserSidebar from "./components/UserSidebar/UserSidebar";
import PostsContainer from "./components/PostsContainer/PostsContainer";
import { getLoggedInUser, loadInitialData } from "./utils";
import { useState } from "react";
import LoginPage from "./components/LoginPage/LoginPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import { User } from "./types";

function App() {
  loadInitialData();
  const currentUser: User | null = getLoggedInUser() ?? null
  const [user, setUser] = useState<User | null>(currentUser)
  const [registering, setRegistering] = useState<boolean>(false)
  
  function handleLogout() {
    const users = localStorage.getItem("users")
    const usersDeserialized: User[] = users ? JSON.parse(users!!) : []
    const dbUser: User | undefined = usersDeserialized.find((user) => user.id == currentUser?.id ?? false)
    if (dbUser) {
      dbUser.loggedIn = false
      localStorage.setItem("users", JSON.stringify(usersDeserialized))
      setUser(null)
    }
  }

  return (
    <div className="App-container">
      {registering && <SignUpPage exitRegistering={() => setRegistering(false)}/>}
      {!user && !registering && <LoginPage handleLogin={(user: User) => setUser(user)} handleRegister={() => setRegistering(true)}/>}
      {user && 
        <UserSidebar handleLogout = {handleLogout} user = {user}/>}
      {user &&
        <PostsContainer/>}
        
    </div>
  );
}

export default App;
