import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect = location.state?.from || "/home";

  const hendleGoogleSignIn = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect);
    });
  };
  return (
    <div>
      <button onClick={hendleGoogleSignIn}>Google sigin</button>
    </div>
  );
};

export default Login;
