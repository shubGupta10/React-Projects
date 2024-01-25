import React from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import "./App.css";
import UserContextProvider from "./context/USerContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>This is a Context API Project</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App;
