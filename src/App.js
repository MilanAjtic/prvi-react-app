import React, { Component } from "react";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Movies from "./components/Movies";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Movies />
        <Footer />
      </div>
    );
  }
}

export default App;
