import React from "react";
import { useState } from "react";

const LogIn = ({ onAdd }) => {
  /*
  THIS CODE DOES NOT WORK YET 
  */
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!userName) {
      alert("Please add a task");
      return;
    }
    if (!password) {
      alert("Please add a pokemon");
      return;
    }

    onAdd({ userName, password });

    setUserName("");
    setPassword("");
  };

  return (
    <div className="borderNoTop">
      <h2>Log in</h2>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>User name</label>
          <input
            className="formInput"
            type="text"
            placeholder="User name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            className="formInput"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <input type="submit" value="Log in" className="myButton" />
      </form>
    </div>
  );
};

export default LogIn;
