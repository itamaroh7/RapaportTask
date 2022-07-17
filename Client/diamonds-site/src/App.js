import './App.css';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import NavBarComp from './components/NavBarComp';

function App() {
  return (
    <div className="App" style={{backgroundColor:"#c1e7f4"}}>
    <NavBarComp />
     <MainPage/>
     <Footer/>
    </div>
  );
}

export default App;
