import React, {Component} from "react"
import "./Edit.css"
class Edit extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            editAmount: "",
            perLap: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event) {
        this.setState({editAmount: event.target.value})
    }
    handleCheck(event) {
        this.setState({ [event.target.name]: event.target.checked });
    }
    handleClick(event) {
        event.preventDefault()
        this.props.changeAmount(this.state.editAmount,this.state.perLap,this.props.id)
        this.props.editToggle()
    }

    render() {
        return (
            <form className = "edit">
                <button onClick={this.handleClick}>New Amount</button>
                <div>
                    <p>per lap</p>
                    <input name="perLap" type="checkbox" onChange={this.handleCheck}/>
                </div>
                <input type="number" onChange={this.handleChange}/>
            </form>
        )
    }
}

export default Edit