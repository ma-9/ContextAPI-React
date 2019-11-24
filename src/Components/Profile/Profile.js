import React from "react";
import AuthContext from "../auth-context";

const Profile = props => (
  <AuthContext.Consumer>
    {authContext => {
      return (
        <div>
          {authContext.isAuth ? "You are Logged In !" : "Please Log in"}
        </div>
      );
    }}
  </AuthContext.Consumer>
);

export default Profile;
