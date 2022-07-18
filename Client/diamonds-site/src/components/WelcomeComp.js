import Rapaport_logo from "../assets/Rapaport_logo.jpeg";

function WelcomeComp() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <h1 className="fst-italic" style={{ fontSize: "8vh" }}>
        Welcome To <br /> Rapaport Group
      </h1>
      <br />
      <img
        src={Rapaport_logo}
        className="img-fluid"
        style={{borderRadius:"3%", width: "60%" }}
        alt="Rapaport logo"
      />
      <div className="fst-italic" style={{ fontSize: "4vh" }}>
        ETHICAL, TRANSPARENT,
        <br />
        COMPETITIVE AND EFFICIENT
        <br />
        Diamond and Jewelry Markets
      </div>
    </div>
  );
}

export default WelcomeComp;
