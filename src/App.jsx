import Header from "./components/Header";
import LogIn from "./components/LogIn";
import Footer from "./components/Footer";
import "./styles/App.css";
import "./styles/form.css";

function App() {
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
  };
  return (
    <div className="App">
      <Header />
      {/* 
      Uncomment this when we have links 
      and replace the links here and in main.jsx
      and add if else that checks if user is logged in
      if yes show nav else show log in form
      <nav>
      the following has to match the ones in main.jsx
        <Link to="/showHide">Show hide</Link>|
        <Link to="/objectFetchC">Fetch object create</Link>|
      </nav>
      <Outlet /> */}
      <LogIn onLogIn={logInFunc} />
      <Footer />
    </div>
  );
}

export default App;
