import React, { useState } from "react";
import { signIn, signUpProvider } from "../auth/firebase";
import { useHistory } from "react-router";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signIn(email, password, history);
  };
  const handleProvider = () => {
    signUpProvider();
    history.push("/");
  };
  return (
    <div className="register">
      <div className="register-form">
        <h1 className="form-title display-3">Login</h1>
        <form id="login">
          <div className="mb-3">
            <label for="email" className="form-label display-4">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email addresss..."
              onChange={(e) => setEmail(e.target.value)}
            />
            <label for="password" className="form-label display-4">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input
            type="button"
            className="btn btn-primary form-control"
            value="login"
            onClick={handleLogin}
          />
        </form>
        <button
          className="btn btn-primary form-control"
          onClick={handleProvider}
        >
          Continue With Google
        </button>
      </div>
      <div className="form-image">
        <img src={"https://picsum.photos/1200/900"} alt="sample" />
      </div>
    </div>
  );
};

export default Login;
