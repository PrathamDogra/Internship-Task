import React, { Component } from 'react'
import './App.scss'
import Top from './components/Top/Top';
import Bottom from './components/Bottom/Bottom';
class App extends Component {
    render() {
        return (
            <div className="App">
               <Top/>
               <Bottom/>
            </div>
        )
    }
}
export default App;