import React, {Component} from "react";
import axios from "axios"
import Sponsor from "./Sponsor"


class Sponsors extends Component {
    constructor() {
        super()
        this.state = {
            sponsors: []
        }
        this.delete = this.delete.bind(this)
    }

    componentDidMount() {
        axios
        .get("/api/sponsors")
        .then(response => this.setState({sponsors: response.data}))
        .catch(error => "There was an Error")
}
    delete(id) {
        axios
        .delete(`/api/sponsors/${id}`)
        .then(response => this.setState({sponsors: response.data}))
        .catch(error => "There was an Error")
    }

render() {
    return(
        <main>
            {this.state.sponsors.map((sponsor) => { 
             let {id,firstName,lastName,phone,amount,perLap,comment,paid} = sponsor;
             return(
             <Sponsor key={id} 
              firstName={firstName}
              lastName={lastName} 
              phone={phone} 
              amount={amount}
              perLap={perLap}
              comment={comment}
              delete={this.delete}
              paid={paid}
              id={id}
              />
             )
            })}
        </main>
    )
}
}

export default Sponsors;