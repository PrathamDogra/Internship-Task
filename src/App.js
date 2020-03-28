import React, { Component } from "react";
import "./App.scss";
import Top from "./components/Top/Top";
import Cards from "./components/Cards/Cards";
import Middle from "./components/Middle/Middle";

import Bottom from "./components/Bottom/Bottom";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Top />
        <Cards />
        <Middle />
        <Bottom />
      </div>
    );
  }
}
export default App;
