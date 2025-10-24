import React from "react";
import UseInputfield from "../hooks/UseInputField";

const HookForm = () => {
  const [name, NameOnChange] = UseInputfield("");
  const [email, EmailOnChange] = UseInputfield("");
  const [password, passwordOnChange] = UseInputfield("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", name, email, password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="name" value={name} onChange={NameOnChange} />
        <br />
        <input type="email" value={email} onChange={EmailOnChange} />
        <br />
        <input type="password" value={password} onChange={passwordOnChange} />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default HookForm;
