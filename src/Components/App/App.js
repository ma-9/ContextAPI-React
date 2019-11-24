import React from "react";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App JS File</h1>
        <Login />
        <Profile />
      </div>
    );
  }
}

export default App;
