import { Link } from "react-router-dom";
import Navigation from '../dashboard/Navigation.js';
import Footer from '../dashboard/Footer.js';

export default function Settings() {
  return (
    <main>
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
      <Navigation/>
      <h2 className="Settings">Settings</h2>
      <Footer/>
    </main>
  );
}
