import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle, signInUsingGithub } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect = location.state?.from || "/home";

  const hendleGoogleSignIn = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect);
    });
  };
  const hendleGithubSignIn = () => {
    signInUsingGithub().then((result) => {
      history.push(redirect);
    });
  };
  return (
    <div>
      <div className="p-5">
        <form>
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              Email
            </label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="inputEmail3" />
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Password
            </label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword3" />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-sm-10 offset-sm-2">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck1"
                />
                <label class="form-check-label" for="gridCheck1">
                  save password
                </label>
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
        </form>
      </div>
      <div className="login-btns">
        <button className="btn btn-primary m-2" onClick={hendleGoogleSignIn}>
          Google sigin
        </button>
        <button className="btn btn-primary m-2">Facebook sigin</button>
        <button className="btn btn-primary m-2" onClick={hendleGithubSignIn}>
          Github sigin
        </button>
      </div>
    </div>
  );
};

export default Login;
