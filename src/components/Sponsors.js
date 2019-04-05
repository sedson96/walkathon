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
        this.changeAmount = this.changeAmount.bind(this)
        this.paidEdit = this.paidEdit.bind(this)
    }

    componentDidMount() {
        axios
        .get("/api/sponsors")
        .then(response => this.setState({sponsors: response.data}))
        .catch(error => "There was an Error")
}

    changeAmount(newAmount,perLap, id) {
        axios
        .put(`/api/sponsors/amount/${id}`,{amount: newAmount, perLap: perLap})
        .then(response => this.setState({sponsors: response.data}))
        .catch(error => "There was an error")
        this.setState({edit: false})
    }
    paidEdit(paid,id) {
        if(paid) {
            paid = false;
        } else if (!paid) {
            paid = true;
        }
        axios
        .put(`/api/sponsors/${id}`,{paid})
        .then(response => this.setState({sponsors: response.data}))
        .catch(error => "There was an error")
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
            <h1 className ="title">Sponsors</h1>
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
              changeAmount={this.changeAmount}
              editToggle={this.editToggle}
              paidEdit={this.paidEdit}
              paid={paid}
              id={id}
              edit={this.state.edit}
              />
             )
            })}
        </main>
    )
}
}

export default Sponsors;