import React, {Component} from "react";
import axios from "axios";
import "./NewSponser.css"

class NewSponser extends Component {
    constructor() {
        super() 
        this.state = {
            firstName: "",
            lastName: "",
            phone: "",
            amount: "",
            perLap: true,
            paid: false,
            comment: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
        handleChange(event) {
            this.setState({ [event.target.name]: event.target.value });
        }
        handleCheck(event) {
            this.setState({ [event.target.name]: event.target.checked });
        }
        handleSubmit(event) {
            event.preventDefault()
            axios
            .post("/api/sponsors",this.state)
            .then(response => this.props.navigate('sponsors'))
            .catch(error => "there was an error")
        }


    render() {
        return(
            <main>
                <form>
                    <div>
                        <label>First Name:</label>
                        <input name="firstName" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input name="lastName" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Phone Number:</label>
                        <input name="phone" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Amount:</label>
                        <input name="amount" onChange={this.handleChange}/>
                        <label>Per Lap Amount</label>
                        <input type="checkbox" name="perLap" onChange={this.handleCheck}/>
                    </div>
                    <div>
                        <label>Comments:</label>
                        <input name="comment" onChange={this.handleChange}/>
                    </div> 
                    <div>
                        <label>Paid:</label>
                        <input type="checkbox" name="paid" onChange={this.handleCheck}/>
                    </div> 
                    <button type="submit" onClick={this.handleSubmit}>Add Sponser</button>
                </form>
             </main>
        )
    }
}

export default NewSponser;