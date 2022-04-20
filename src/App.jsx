import Header from "./components/Header";
import LogIn from "./components/LogIn";
import Footer from "./components/Footer";
import "./styles/App.css";
import "./styles/form.css";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";

function App() {
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  /*
  logInFunc DOES NOT WORK YET 
  */
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
    console.log(data);
    // get username and role from the data
    // setUserName(data.userName);
    // setUserRole(data.role);
    // if(userName != null && userName != ""){
    //   setLoggedIn(true);
    // }
  };
  return (
    <div className="App">
      <Header />
      {!loggedIn && (
        <nav className="borderNoTop">
          <Link to="/">Home</Link>
          <Link to="/pokemons">Pokemons</Link>
          <Link to="/swapi">Star wars</Link>
        </nav>
      )}
      <Outlet />

      {!loggedIn && <LogIn onAdd={logInFunc} />}

      {/* when we have set the user and role erace this line and uncomment the one below it */}
      {loggedIn && <WelcomePage name="user" role="role" />}
      {/* {loggedIn && <WelcomePage name={userName} role={userRole} />} */}

      <Footer />
    </div>
  );
}

export default App;
