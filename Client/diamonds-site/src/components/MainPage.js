import { useEffect, useState } from "react";
import Statistics from "./Statistics";
import { useDispatch } from "react-redux";
import { initDiamonds, initStatistics } from "../reducer/diamondReducer";
import { DiamondsTable } from "./table/DiamondsTable";
import AddDiamond from "./AddDiamond";
import Aos from 'aos'
import "aos/dist/aos.css"
import { Spinner } from "react-bootstrap";
import WelcomeComp from "./WelcomeComp";

function MainPage() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const getDataFetch = async() =>{
    fetch(process.env.REACT_APP_API + "diamonds")
      .then((resp) => resp.json())
      .then((data) => {
        dispatch(initDiamonds(data));
        let statistics = {
          avg_price: (
            Array.from(data).reduce((total, elem) => total + elem.price, 0) /
            data.length
          ).toFixed(2),
          min_price: Math.min(...data.map((elem) => elem.price)),
          num_of_diamonds: data.length,
        };
        dispatch(initStatistics(statistics));
        setLoading(false);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    Aos.init({duration:2000});
    getDataFetch()
  }, []);
  return (
    <div className="container-fluid d-flex  align-items-center justify-content-center ">
      <div
        className="container-fluid d-flex flex-column "
        style={{ width: "100%" }}
      >
        <section
          id="welcome"
          className="container-fluid d-flex align-items-center justify-content-center p-3 mt-5 mb-4 shadow rounded"
          style={{  backgroundColor: "#d6f4ff" , height:'100vh'}}
          data-aos="fade-right"
        >
           <WelcomeComp/>
        </section>
        <section
          id="statistics"
          className="container-fluid d-flex align-items-center justify-content-center p-2 my-5 shadow rounded"
          style={{  backgroundColor: "#def4fc", height:'100vh' }}
          data-aos="fade-right"
        >
          {loading ? (
            <Spinner/>
          ) : (
            <Statistics statistics />
          )}
        </section>
        <section
          id="diamonds"
          className="container-fluid  p-5 my-5 shadow rounded"
          style={{  backgroundColor: "#d6f4ff", height:'100vh' }}
          data-aos="fade-right"
        >
          {loading ? (
            <Spinner/>
          ) : (
            <DiamondsTable statistics />
          )}
        </section>
        <section
          id="add-diamond"
          className="container-fluid d-flex align-items-center justify-content-center p-5 my-5 shadow rounded"
          style={{ backgroundColor: "#def4fc", height:'100vh' }}
          data-aos="fade-right"
        >
          <AddDiamond getDataFunc={getDataFetch}/>
        </section>
      </div>
    </div>
  );
}

export default MainPage;
