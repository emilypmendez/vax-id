// import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <main>
    <br/>
      <div className="FooterNavContainer">
        <ul className="footer-nav">
          <a href="/" >Home</a> {" | "}
          <a href="/#">About Us</a> {" | "}
          <a href="/#">Services</a> {" | "}
          <a href="/#">Contact</a>
        </ul><br/>
      </div>

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
    </main>
  );
}
