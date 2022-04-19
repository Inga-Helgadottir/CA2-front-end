import { useState } from "react";
import "./styles/App.css";
import "./styles/form.css";

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
      <header className="border">
        <h1>This is our CA 2 project</h1>
      </header>
      {/* 
      Uncomment this when we have links 
      and replace the links here and in main.jsx
      and add if else that checks if user is logged in
      if yes show nav else show log in form
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/showHide">Show hide</Link>|
        <Link to="/objectFetchC">Fetch object create</Link>|
      </nav>
      <Outlet /> */}
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
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <input type="submit" value="Log in" className="myButton" />
        </form>
      </div>
    </div>
  );
}

export default App;
