// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
    
import React, { Component } from 'react';

class App extends Component {

  title = "React App"

  test() {
    console.log("test")
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <span className="h2">{this.title}</span>
        </div>

        <button className="btn btn-primary" onClick={() => this.test()}>click me</button>

      </div>
    );
  }
}

export default App;