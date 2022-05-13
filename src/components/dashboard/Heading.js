import dbIcon from '../../assets/db-icon.png';

function Heading() {
  return (
    <>
      <div className="row-header">
        <div className="column-header">
          <img src={dbIcon} className="avatar" alt="avatar"/>
            <h4>WELCOME BACK, EDSN!</h4>
            <p> View all of your vaccine information in this dashboard.</p>
        </div>
      </div>
    </>
  );
}

export default Heading
