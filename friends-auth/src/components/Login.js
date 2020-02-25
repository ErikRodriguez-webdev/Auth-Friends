import React, { useState } from "react";

const Login = () => {
  // local state
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChanges = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCredentials({
      username: "",
      password: ""
    });
  };

  return (
    <div>
      <h1>Login:</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={credentials.username}
            placeholder="joey"
            onChange={handleChanges}
            autoComplete="off"
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={credentials.password}
            placeholder="123abc!@#"
            onChange={handleChanges}
            autoComplete="off"
          />
        </label>
      </form>
    </div>
  );
};
export default Login;
