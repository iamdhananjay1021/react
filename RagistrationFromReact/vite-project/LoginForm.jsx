import { useState } from "react";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Fixed typo here

    const loginData = {
      username,
      password,
    };
    console.log(loginData);
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <h1>Login Form</h1>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="username">UserName</label>
            <input
              type="text"
              name="username"
              required
              autoComplete="off"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              required
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Corrected this line
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
