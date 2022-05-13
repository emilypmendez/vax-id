// import { Link } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";
import dbIcon from '../../assets/db-icon.png';

function DashboardContent() {
  return (
    <>
    <br/>
    <div class="container">
      <div class="row">

        <div class="col-sm-4">
            <Col>
            <center><img src={dbIcon} className="avatar-settings" alt="avatar settings"/></center><br/>
              <Card>
                <Card.Header><strong><center>Edsn Kensington</center></strong></Card.Header>
                <Card.Body>
                  <Card.Text>
                  <center>
                    <table className="vaccine-info">
                      <tr className="settings-card"><strong>Update Profile</strong></tr><br/>
                      <tr className="settings-card">Billing Information</tr><br/>
                      <tr className="settings-card">Connected Accounts</tr><br/>
                      <tr className="settings-card">Notifications</tr><br/>
                      <tr className="settings-card">Message Center</tr>
                    </table>
                  </center>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
        </div>
        <div class="col-sm-8">
            <Col>
                <center><h4><strong>PROFILE</strong></h4></center><br/>
                    <Card>
                      <Card.Header><center>Update your profile settings</center></Card.Header>
                      <Card.Body>
                        <Card.Text>
                          <center><strong>About Me</strong></center>
                        </Card.Text>
                        <center><textarea>
                        My name is Edsn and I am fully vaccinated.
                        I am an adjunct professor at Baruch College and I am interested in extending my vaccination profile with VAX ID.
                        </textarea></center>
                        <br/>
                      </Card.Body>
                    </Card>
                    <br/>
                    <Button className="settings-profile-button" variant="primary">Save</Button>
                  </Col>
          </div>
      
        </div>
      </div>

    </>
  );
}

export default DashboardContent
