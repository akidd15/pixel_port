
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import './assets/styles/Nav.css';





function App() {

  return (
<Router>
      <NavbarComponent />
      <Switch>
        <Route path="/" exact component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
    </Router>
  );
}




export default App;
