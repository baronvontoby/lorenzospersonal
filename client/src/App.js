import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';
import PortfolioPage from './pages/PortfolioPage';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
    <div className='NavBar'>
      <NavBar></NavBar>
    </div>
      <div className="Main">
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={MainPage} />
              <Route exact path='/contact' component={ContactPage} />
              <Route exact path='/resume' component={ResumePage} />
              <Route exact path='/portfolio' component={PortfolioPage} />
            </Switch>
          </BrowserRouter>
      </div>
      <div className='Footer'>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
