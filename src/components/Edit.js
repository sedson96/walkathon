import React, {Component} from "react"

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
            <form>
                <input name="editAmount" onChange={this.handleChange}/>
                <input name="perLap" type="checkbox" onChange={this.handleCheck}/>
                <p>per lap</p>
                <button onClick={(event) => {event.preventDefault(); this.props.changeAmount(this.state.editAmount,this.state.perLap,this.props.id)}}></button>
            </form>
        )
    }
}

export default Edit