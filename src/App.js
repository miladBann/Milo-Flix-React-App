//import Navigation from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import MovieInfo from "./pages/MovieInfo.jsx";
import Subscription from "./pages/Subscription.jsx";
import Register from "./pages/Register.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/movie/:id" Component={MovieInfo} /> 
            <Route path="/Subscription" Component={Subscription}/>
            <Route path="/rigester" Component={Register}/>
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
