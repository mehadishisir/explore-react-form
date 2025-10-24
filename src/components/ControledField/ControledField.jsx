import React, { useState } from "react";

const ControledField = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleControleField = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  console.log(email, password);

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (password.length < 6) {
      setError("your password should be 6 or avobe");
    } else {
      setError("");
    }
  };
  return (
    <div>
      <form onSubmit={handleControleField} action="">
        <input type="email" onChange={handleEmail} value={email} name="email" />
        <br />
        <input
          type="password"
          onChange={handlePassword}
          name="password"
          value={password}
          required
        />
        <br />
        <input type="submit" value="submit" />
      </form>
      <p>{error}</p>
    </div>
  );
};

export default ControledField;
