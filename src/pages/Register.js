import React, { useState } from "react";
import { useHistory } from "react-router";
import { createUser, signUpProvider } from "../auth/firebase";

const Register = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    const displayName = `${firstName} ${lastName}`;
    createUser(email, password, displayName, history);
    //history.push("/");
  };

  const handleProvider = () => {
    signUpProvider();
    history.push("/");
  };

  return (
    <div className="register">
      <div className="form-image">
        <img src={"https://picsum.photos/1200/900"} alt="sample" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3">Register</h1>
        <form id="register">
          <div className="mb-3">
            <label for="first-name" className="form-label display-4">
              Firstname
            </label>
            <input
              type="first-name"
              id="first-name"
              className="form-control"
              placeholder="Enter your first name..."
              onChange={(e) => setFirstName(e.target.value)}
            />
            <div />
            <div className="mb-3">
              <label for="last-name" className="form-label display-4">
                Email
              </label>
              <input
                type="last-name"
                id="last-name"
                className="form-control"
                placeholder="Enter your last name..."
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
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
              value="Register"
              onClick={handleRegister}
            />
          </div>
        </form>
        <button
          className="btn btn-primary form-control"
          onClick={handleProvider}
        >
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Register;
