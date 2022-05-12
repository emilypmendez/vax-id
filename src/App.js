import './App.css';
// import Login component
import Login from './components/login/Login'
import { Link } from "react-router-dom";

function App() {
  return (
      <div className="App">

      <nav
        style={{
          textAlign: "center",
          alignItems: "center",
          display: "block",
          justifyContent: "center",
          marginTop: 12,
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> | {" "}
        <Link to="/dashboard">Dashboard</Link> | {" "}
        <Link to="/settings">Settings</Link>
      </nav>

          <Login/>
          <br/>
          <p className="copyright">
            VAX ID SYSTEM © All Rights Reserved
          </p>
          <br/>
          <a
            className="footer-unique"
            href="https://www.emilypmendez.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Designed by Emily Portalatin-Mendez
          </a>
      </div>


  );
}

export default App;
