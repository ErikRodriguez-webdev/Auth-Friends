import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = () => {
  // local state
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChanges = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // hook for spinner
    setIsLoading(true);
    // modified axios post
    axiosWithAuth()
      .post("/api/login", credentials)
      .then((response) => {
        console.log("From Post success: ", response.data.payload);
        window.localStorage.setItem("token", response.data.payload);
      })
      .catch((error) => {
        console.log("From Post error: ", error);
      })
      .finally(setIsLoading(false));
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
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
