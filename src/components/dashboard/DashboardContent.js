// import { Link } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";

function DashboardContent() {
  return (
    <>
    <br/>
    <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Header><strong>COVID-19 Facts</strong></Card.Header>
            <Card.Body>
              <Card.Text>
                COVID-19 Community Levels are a new tool to help communities
                decide what prevention steps to take based on the latest data.
                Levels can be low, medium, or high and are determined by looking at hospital beds being used,
                hospital admissions, and the total number of new COVID-19 cases in an area. Take precautions
                to protect yourself and others from COVID-19 based on the COVID-19 Community Level in your area.
              </Card.Text>
              <table>
              <tbody>
                <tr>
                  <td className="level-low"><strong>Low</strong></td>
                  <td className="level-mid"><strong>Medium</strong></td>
                  <td className="level-high"><strong>High</strong></td>
                </tr>
                <tr>
                  <td className="content-low">
                    <b>·</b>Stay up to date with COVID-19 vaccines<br/>
                    <b>·</b>Get tested if you have symptoms
                  </td>
                  <td className="content-mid">
                    <b>·</b>If you are at high risk for severe illness, talk to your healthcare provider about whether you need to wear a mask and take other precautions<br/>
                    <b>·</b>Stay up to date with COVID-19 vaccines<br/>
                    <b>·</b>Get tested if you have symptoms
                  </td>
                  <td className="content-high">
                    <b>·</b>Wear a mask indoors in public<br/>
                    <b>·</b>Stay up to date with COVID-19 vaccines<br/>
                    <b>·</b>Get tested if you have symptoms<br/>
                    <b>·</b>Additional precautions may be needed for people at high risk for severe illness
                  </td>
                </tr>
                </tbody>
              </table>
              <br/>
              <Card.Text>
              People may choose to mask at any time. People with symptoms, a positive test, or exposure to someone with COVID-19 should wear a mask.
              Masks are recommended in indoor public transportation settings and may be required in other places by local or state authorities.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header><strong>My Vaccine Information</strong></Card.Header>
            <Card.Body>
              <Card.Text>

              View your vaccine information at a glance.<br/><br/>

                <table className="vaccine-info">
                  <tr className="vaccine-id-constants"><strong>Employee</strong><td>Edsn Samson Kensington</td></tr>
                  <tr className="vaccine-id-constants"><strong>Company</strong><td>City University of New York</td></tr>
                  <tr className="vaccine-id-constants"><strong>Department</strong><td>Developer Operations, CIS 3400 Baruch College</td></tr>
                  <tr className="vaccine-id-constants"><strong>Vaccinated</strong>
                  <td><table>
                    <tr>
                      <td>105662984</td>{" "}<br/>
                      <td>5/19/2021</td>{" "}<br/>
                      <td>7/24/2021</td>{" "}<br/>
                      <td>10/30/2021</td>
                    </tr>
                    <tr>
                      <td></td><br/>
                      <td>1st dose</td><br/>
                      <td>2nd dose</td><br/>
                      <td>Booster</td>
                    </tr>
                  </table></td>
                  </tr>

                    <br/>
                  <tr className="vaccine-id-constants"><strong>Recent Testing</strong>
                  <td><table>
                    <tr>
                      <td>Type: Rapid</td>{" "}<br/>
                      <td>NEGATIVE RESULT</td>
                    </tr>
                  </table></td>
                  </tr>
                </table>

              </Card.Text>
            </Card.Body>
          </Card>
          <br/>
          <Button className="vaccine-details-button" variant="primary">View Detailed Results</Button>
        </Col>
    </Row>
    </>
  );
}

export default DashboardContent
