import React, {Component} from 'react';
import NavBar from './Components/JobBoard/NavBar';
import JobBoard from './Components/JobBoard/JobBoard';

class App extends Component {
  state = {  }
  render() { 
    return (
      <div>
        <NavBar/>
        <JobBoard/>
      </div>
    );
  }
}
 
export default App;