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
            perLap: false,
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
                        <input className="boxs" name="firstName" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input className="boxs" name="lastName" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Phone Number:</label>
                        <input className="boxs" name="phone" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Amount:</label>
                        <div className="lap">
                            <label>Per Lap Amount</label>
                            <input className="check" type="checkbox" name="perLap" onChange={this.handleCheck}/>
                        </div>
                        <input className="boxs" name="amount" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Comments:</label>
                        <input className="boxs" name="comment" onChange={this.handleChange}/>
                    </div> 
                    <div>
                        <label>Paid:</label>
                        <input className="check" type="checkbox" name="paid" onChange={this.handleCheck}/>
                    </div> 
                    <button type="submit" onClick={this.handleSubmit}>Add Sponser</button>
                    <button type="reset" onClick={() => this.props.navigate("sponsors")}>Cancel</button>
                </form>
             </main>
        )
    }
}

export default NewSponser;