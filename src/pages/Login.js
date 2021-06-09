import React from "react";

const Login = () => {
  return (
    <div>
      <div className="register-form">
        <h1 className="form-title" display-3>
          Login
        </h1>
        <form id="login">
          <div className="mb-3">
            <label for="emai" className="form-label display-4">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email addresss..."
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
