import React, {Component} from 'react';
import NavBar from './Components/Navbar/NavBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import CandidatesGrid from '../src/Components/CandidateGrid/CandidateGrid';
import JobGrid from '../src/Components/JobGrid/JobGrid';
import Footer from '../src/Components/Footer/Footer';

class App extends Component {
  state = {}
  render() {
    return (
      <div>
        <CssBaseline/>
        <Router>
          <NavBar/>
          <Route exact path="/" component={Home}></Route>
          <Route path="/candidates" component={CandidatesGrid}></Route>
          <Route path="/jobs" component={JobGrid}></Route>
          <Route
            path='/nsbedfw'
            component={() => {
            window.location.href = 'https://www.nsbedfw.org';
            return null;
          }}/>
        </Router>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;