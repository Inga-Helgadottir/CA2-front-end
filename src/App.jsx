import Header from "./components/Header";
import LogIn from "./components/LogIn";
import Footer from "./components/Footer";
import "./styles/App.css";
import "./styles/form.css";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

function App() {
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
    console.log(data);
    setUserName(data);
    setLoggedIn(true);
  };

  return (
    <div className="App">
      <Header />
      {/* 
      Uncomment this when we have links 
      and replace the links here and in main.jsx
      {loggedIn &&
      <nav>
      {/*the following has to match the ones in main.jsx
      in main.jsx
      <Route path="/showHide" element={<ShowHide />} />
      in App.jsx
      <Link to="/showHide">Show hide</Link>|
      </nav> }
      <Outlet />
      */}
      {!loggedIn && <LogIn onLogIn={logInFunc} />}

      <Footer />
    </div>
  );
}

export default App;
