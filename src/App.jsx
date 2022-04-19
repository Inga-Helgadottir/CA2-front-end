import { useState } from "react";
import "./styles/App.css";

function App() {
  /*
  THIS CODE DOES NOT WORK YET 
  */
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const logIn = async (user) => {
    const res = await fetch(
      `http://localhost:8080/dat3_startcode_security_war_exploded/api/login`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );

    const data = await res.json();
    console.log(data);
    setUserName(data);
  };

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

    logIn({ userName, password });

    setUserName("");
    setPassword("");
  };

  return (
    <div className="App">
      <header>
        <h1>This is our CA2 project</h1>
      </header>
      <h2>Log in</h2>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>user name</label>
          <input
            className="formInput"
            type="text"
            placeholder="user name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
        <div className="form-control">
          <label>password</label>
          <input
            className="formInput"
            type="text"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <input type="submit" value="Save Task" className="myButton" />
      </form>
    </div>
  );
}

export default App;
