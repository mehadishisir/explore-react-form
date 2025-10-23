import React, { useState } from "react";

const ControledField = () => {
  const [error, setError] = useState("");
  const handleControleField = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  const handlePassword = (e) => {
    console.log(e.target.value);
    if (e.target.value.length < 6) {
      setError("your password should be 6 or avobe");
    } else {
      setError("");
    }
  };
  return (
    <div>
      <form onSubmit={handleControleField} action="">
        <input type="email" name="email" />
        <br />
        <input
          type="password"
          onChange={handlePassword}
          name="password"
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
