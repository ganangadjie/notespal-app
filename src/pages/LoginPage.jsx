import React, { useState } from "react";
import "../assets/css/Login.css";
import { APIAuth } from "../apis/APIAuth";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await APIAuth.signInWithCredentials({
        email,
        password,
      });
      alert("Berhasil Login");
      navigate("/");
    } catch (error) {
      console.log("Gagal Login", Error);

  }
  };
  return (
    <div className="login-container">
      <div className="box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /> */}
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          <label htmlFor="showPassword">Show Password</label>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
