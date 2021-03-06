import React, { Component } from 'react';
import "./reset.css"
import './App.css';
import Stats from "./components/Stats"
import Goals from "./components/Goals"
import Sponsors from "./components/Sponsors"
import NewSponsor from "./components/NewSponsor"
import Header from "./components/Header"
import Footer from "./components/Footer"

class App extends Component {
  constructor() {
    super()
    this.state = {
      nav: "home"
    }
    this.navigate = this.navigate.bind(this);
  }
  navigate(nav) {
    this.setState({nav})
  }

  render() {
    return (
      <div>
        <Header navigate={this.navigate} />
        {this.state.nav === "home" ? <Stats /> :
         this.state.nav === "sponsors" ? <Sponsors /> :
         this.state.nav === "new" ? <NewSponsor navigate={this.navigate}/> :
         this.state.nav === "goals" ? <Goals /> :
         "An error has occured"} 
      <Footer />
      </div>
    );
  }
}

export default App;