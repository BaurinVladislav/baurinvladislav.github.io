import React, { Component } from 'react';
import Tables from './components/Table';

class App extends Component {
  render() {
    return(
      <div>
      <div className="container" style={{height: '80vh'}}>  
        <h1 className="container" >Titel</h1>
        <Tables />
      </div>
      <div className="container" style={{height: '50vh'}}>
      {/* <h2 >ga</h2> */}
      </div>
      </div>
    );
  }
}
export default App;
