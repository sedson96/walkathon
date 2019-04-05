import React, {Component} from "react"
import "./Edit.css"
class Edit extends Component {
    constructor() {
        super() 
        this.state = {
            editAmount: "",
            perLap: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }
    handleCheck(event) {
        this.setState({ [event.target.name]: event.target.checked });
    }

    render() {
        return (
            <form className = "edit">
                <button onClick={(event) => {event.preventDefault(); this.props.changeAmount(this.state.editAmount,this.state.perLap,this.props.id)}}>New Amount</button>
                <div>
                    <p>per lap</p>
                    <input name="perLap" type="checkbox" onChange={this.handleCheck}/>
                </div>
                <input name="editAmount" onChange={this.handleChange}/>
            </form>
        )
    }
}

export default Edit