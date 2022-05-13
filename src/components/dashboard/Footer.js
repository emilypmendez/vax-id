// import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <footer>
    <br/><br/><br/><br/>
        <div className="footer-nav">
          <center>
            <div className="footer-row">
              <div className="column"><a href="/" >Home</a> {"  "}</div>
              <div className="column"><a href="/#">About Us</a> {"  "}</div>
              <div className="column"><a href="/#">Services</a> {"  "}</div>
              <div className="column"><a href="/#">Contact</a></div>
            </div>
          </center>
          <br/><br/><br/><br/>
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
          <br/><br/>
        </div><br/>



    </footer>
  );
}
