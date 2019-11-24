import React from "react";
import AuthContext from "../auth-context";

class Login extends React.Component {
  render() {
    return (
      <AuthContext.Consumer>
        {authContext => {
          return (
            <button onClick={authContext.toggleAuth}>
              {authContext.isAuth ? "Logout" : "Login"}
            </button>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default Login;
