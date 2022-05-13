import { Link } from "react-router-dom";
import Navigation from './Navigation.js';
import Heading from './Heading';
import DashboardContent from './DashboardContent';
import Footer from './Footer.js';

export default function Dashboard() {
  return (
    <>
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
        <h2 className="Dashboard">Dashboard</h2>
      <Heading/>
        <DashboardContent/>
      <Footer/>
    </>
  );
}
