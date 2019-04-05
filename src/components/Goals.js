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
        .put(`api/lap/goals/${this.state.lapGoal}`)
        .then(response => this.setState({lapGoal: response.data}))
        .catch(error => "there was an error")
        axios
        .put(`api/amount/goals/${this.state.amountGoal}`)
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
                <h1 className ="title">Set Your Goals</h1>
                <form className ="goalsForm">
                    <div>
                        <label>Lap Amount</label>
                        <label>Total Amount</label>
                    </div>
                    <div>
                        <input name="lapGoal" value={lapGoal} onChange={this.handleChange}/>
                        <input name="amountGoal" value={amountGoal} onChange={this.handleChange}/>
                    </div>
                    <button name={amountGoal}type="submit" onClick={this.setGoals}>Submit</button>
                </form>
            </main>
        )
    }
}

export default Goals