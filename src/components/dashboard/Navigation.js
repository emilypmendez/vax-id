import { Navbar, Container } from "react-bootstrap";
import { IoNotificationsCircle } from "react-icons/io5";
import { GiWorld } from "react-icons/gi";

function Navigation() {
  return (
    <div className="Navigation">
      <Navbar>
      <Container>
        <Navbar.Brand href="/"><strong>VAX ID</strong></Navbar.Brand>
          <Navbar.Text>Vaccine Identification for Everyone</Navbar.Text>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse className="justify-content-end">
          <GiWorld style={{ marginBottom: "2px", marginRight: "15px" }} size={30} color={"#28d"} href="/dashboard" onClick={()=>{"/dashboard"}}/>
          <IoNotificationsCircle style={{ marginBottom: "2px" }} size={35} color={"red"} href="/settings" onClick={()=>{"/settings"}}/>
          <button className="logout-button">Logout</button>
        </Navbar.Collapse>

      </Container>
    </Navbar>
    </div>
  );
}

export default Navigation;
