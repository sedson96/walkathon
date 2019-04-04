import React, {Component} from "react";
import axios from "axios"
import Sponsor from "./Sponsor"


class Sponsors extends Component {
    constructor() {
        super()
        this.state = {
            sponsors: []
        }
    }

    componentDidMount() {
        axios
        .get("/api/sponsors")
        .then(response => this.setState({sponsors: response.data}))
        .catch(error => "There was an Error")
}

render() {
    return(
        <main>
            {this.state.sponsors.map((sponsor) => { 
             let {id,firstName,lastName,phone,amount,perLap,comment} = sponsor;
             return(
             <Sponsor key={id} 
              firstName={firstName}
              lastName={lastName} 
              phone={phone} 
              amount={amount}
              perLap={perLap}
              comment={comment}/>
             )
            })}
        </main>
    )
}
}

export default Sponsors;