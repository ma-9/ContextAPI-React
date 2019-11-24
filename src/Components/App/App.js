import React from "react";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import AuthContext from "../auth-context";

class App extends React.Component {
  state = {
    isAuth: false
  };

  toggleAuth = () => {
    this.setState(oldState => {
      return {
        isAuth: !oldState.isAuth
      };
    });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          toggleAuth: this.toggleAuth
        }}
      >
        <Login />
        <Profile />
      </AuthContext.Provider>
    );
  }
}

export default App;
