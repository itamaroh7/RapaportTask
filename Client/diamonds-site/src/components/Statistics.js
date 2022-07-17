import { useSelector } from "react-redux";
import tiffany_Diamonds from "../assets/tiffany-Diamonds.jpg";
import price_min from "../assets/price_min.jpg";
import average from "../assets/average.jpeg";

function Statistics() {
  const { statistics } = useSelector((state) => state.diamondsState);

  return (
    <div className="container" >
      <h1 className="my-5 fst-italic" style={{ fontSize: "8vh" }}>
        Statistics
      </h1>
      <div className="row my-4">
        <div className="col-sm-none col-md-3">
          <img
            src={tiffany_Diamonds}
            style={{ width: "60%", height: "90%", borderRadius:"40%" }}
            alt="diamonds"
          />
        </div>
        <div className="col-sm-12 col-md-5 fst-italic">
          <h1 style={{ fontSize: "5vh" }} className="ms-1">
            Number Of Diamonds
          </h1>
        </div>
        <div className="col-sm-12 col-md-2">
          <h1 style={{ fontSize: "5vh" }}>{statistics.num_of_diamonds}</h1>
        </div>
        <div className="row my-5">
          <div className="col-sm-none col-md-3">
            <img
              src={price_min}
              style={{ width: "60%", height: "90%",borderRadius:"30%" }}
              alt="diamonds"
            />
          </div>
          <div className="col-sm-12 col-md-5 fst-italic">
            <h1 style={{ fontSize: "5vh" }} className="ms-1">
              Minimum Price
            </h1>
          </div>
          <div className="col-sm-12 col-md-2 ">
            <h1 style={{ fontSize: "5vh" }}>{statistics.min_price}</h1>
          </div>
          <div className="row my-5">
            <div className="col-sm-none col-md-3">
              <img
                src={average}
                style={{ width: "60%", height: "90%",borderRadius:"40%" }}
                alt="diamonds"
              />
            </div>
            <div className="col-sm-12 col-md-5 fst-italic">
              <h1 style={{ fontSize: "5vh" }} className="ms-1">
                Average Price
              </h1>
            </div>
            <div className="col-sm-12 col-md-2 ">
              <h1 style={{ fontSize: "5vh" }}>{statistics.avg_price}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
