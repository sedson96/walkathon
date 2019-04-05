import React, {Component} from "react";
import axios from "axios";
import "./Stats.css"



class Stats extends Component {
    constructor() {
        super() 
        this.state = {
            lapGoal: 0,
            amountGoal: 0,
            sponsors: []
        }
    }

    componentDidMount() {
        axios
        .get("/api/sponsors")
        .then(response => this.setState({sponsors: response.data}))
        .catch(error => "There was an Error")
        axios
        .get("api/goals")
        .then(response => this.setState(response.data))
    }


    render() {
        let total = this.state.sponsors.reduce((acc,sponsor) => {
            if (sponsor.perLap === false) {
                acc += sponsor.amount
            }
            return acc;
        },0) 
        let lapTotal = this.state.sponsors.reduce((acc,sponsor) => {
            if (sponsor.perLap === true) {
                acc += sponsor.amount
            }
            return acc;
        },0) 
        let collected = this.state.sponsors.reduce((acc,sponsor) => {
            if (sponsor.paid === true) {
                acc += 1
            }
            return acc;
        },0) 

        return(      
            //make another component 
             <main className="stats">
                 <section>
                    <h1 className ="title">Walk-A-Thon</h1>
                 </section>
                 <section className="goals">
                    <h2>Goals</h2>
                    <div>
                        <h2>{`$${this.state.amountGoal}`}</h2>
                        <h2>{`$${this.state.lapGoal}/lap`}</h2>
                    </div>
                 </section>
                 <section className="promised">
                    <h2>Promised</h2>
                    <div>
                        <h2>${total}</h2>
                        <h2>${lapTotal}/lap</h2>
                    </div>
                 </section>
                 <section className="collected">
                    <h2>Collected From</h2>
                    <h2>{collected} out of {this.state.sponsors.length} sponsors</h2>
                 </section>
             </main>)
    }
}


export default Stats;