import React, {Component} from "react";
import axios from "axios"


class Goals extends Component {
    constructor(){
        super()
        this.state = {
            lapGoal: 0,
            amountGoal: 0,
        }

        this.setGoals = this.setGoals.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount(){
        axios
        .get("api/goals")
        .then(response => this.setState(response.data))
        .catch(error => "there was an error")
    }

    setGoals() {
        axios
        .post(`api/lap/goals/${this.state.lapGoal}`)
        .then(response => this.setState({lapGoal: response.data}))
        .catch(error => "there was an error")
        axios
        .post(`api/amount/goals/${this.state.amountGoal}`)
        .then(response => this.setState({amountGoal: response.data}))
        .catch(error => "there was an error")

    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render () {
        let{lapGoal,amountGoal} = this.state;
        return(
            <main>
                <form className ="goalsForm">
                    <div>
                        <label>Lap Goal</label>
                        <input name="lapGoal" value={this.state.lapGoal} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Amount Goal</label>
                        <input name="amountGoal" value={this.state.amountGoal} onChange={this.handleChange}/>
                    </div>
                    <button name={amountGoal}type="submit" onClick={this.setGoals}>Submit</button>
                </form>
            </main>
        )
    }
}

export default Goals