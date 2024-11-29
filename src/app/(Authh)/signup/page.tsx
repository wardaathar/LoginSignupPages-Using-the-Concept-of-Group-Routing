
"use client";

import React, { useState } from "react";
import Link from "next/link";


export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Please Correct your Password");
      return;
    }

    console.log("Signed up with", username, password);
  };

  return (
    <div className="auth-form">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br></br><label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <br></br><button type="submit">Sign Up</button>
      </form>
      <div className="auth-links">
        <Link href="/login">Already Acount?Login</Link>
      </div>
    </div>
  );
}
