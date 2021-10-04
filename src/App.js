import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MenuuBar from './components/MenuuBar/MenuuBar';
import Footer from './components/Footer/Footer';
import Service from './components/Service/Service';
import AboutUs from './components/About us/AboutUs';
import Services from './components/Services/Services';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <MenuuBar></MenuuBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service">
            <Services></Services>
          </Route>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Login path="/login"></Login>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
