import 'fa-icons';
import rapaportg_icon from "../assets/rapaportg_icon.jpeg";

function NavBarComp() {
  return (
    <nav
      className="navbar navbar-expand-md fixed-top d-flex flex-wrap"
      style={{ backgroundColor: "#4a8da5" }}
    >
      
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#welcome">
        <span><i class="fa fa-home"></i> </span>
          Home
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link text-white"
                aria-current="page"
                href="#statistics"
              >
               <span><i class="fa fa-line-chart"></i> </span>
                Statistics
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#diamonds">
              <span><i class="fa fa-diamond"></i> </span>
                Diamonds
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#add-diamond">
              <span><i class="fa fa-plus-square"></i> </span>
                Add Diamond
              </a>
            </li>
          </ul>
        </div>
        <span><img src={rapaportg_icon} alt="rapaport icon" style={{borderRadius:"50%", width:"48px", height:"48px"}}></img></span>
          
      </div>
    </nav>
  );
}

export default NavBarComp;
