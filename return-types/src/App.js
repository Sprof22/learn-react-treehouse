import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";

import Header from "./Header";
import Teachers from "./Teachers";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        {ReactDOM.createPortal(
          <h1>Hello from inside the portal</h1>,
          document.getElementById('my-portal')
        )}
        <Header />
        <Teachers />
        <Footer />
      </div>
    );
  }
}

export default App;
