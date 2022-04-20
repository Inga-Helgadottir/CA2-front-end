import Header from "./components/Header";
import LogIn from "./components/LogIn";
import Footer from "./components/Footer";
import "./styles/App.css";
import "./styles/form.css";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import LogOut from "./components/LogOut";

function App() {
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const logInFunc = async (user) => {
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
    setUserName(data.username);
    setUserRole(data.role0);
    if (data.username != null && data.username != "") {
      setLoggedIn(true);
    }
  };

  const logOutFunc = async () => {
    setLoggedIn(false);
    setUserName("");
    setUserRole("");
  };

  return (
    <div className="App">
      <Header />

      {loggedIn && <WelcomePage name={userName} role={userRole} />}

      {loggedIn && (
        <nav className="borderNoTop">
          <Link to="/">Home</Link>
          <Link to="/pokemons">Pokemons</Link>
          <Link to="/swapi">Star wars</Link>
        </nav>
      )}
      <Outlet />

      {!loggedIn && <LogIn onAdd={logInFunc} />}

      {loggedIn && <LogOut onClick={logOutFunc} />}

      <Footer />
    </div>
  );
}

export default App;
