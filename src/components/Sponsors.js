import React, {Component} from "react";
import axios from "axios"
import Sponsor from "./Sponsor"
import EasySponsor from "./EasySponsor"


class Sponsors extends Component {
    constructor() {
        super()
        this.state = {
            sponsors: [],
            view: "detail"
        }
        this.delete = this.delete.bind(this)
        this.changeAmount = this.changeAmount.bind(this)
        this.paidEdit = this.paidEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        axios
        .get("/api/sponsors")
        .then(response => this.setState({sponsors: response.data}))
        .catch(error=> console.log("there was an error"))
}

    changeAmount(newAmount,perLap, id) {
        axios
        .put(`/api/sponsors/amount/${id}`,{amount: newAmount, perLap: perLap})
        .then(response => this.setState({sponsors: response.data}))
        .catch(error=> console.log("there was an error"))
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
        .catch(error=> console.log("there was an error"))
    }
    delete(id) {
        axios
        .delete(`/api/sponsors/${id}`)
        .then(response => this.setState({sponsors: response.data}))
        .catch(error=> console.log("there was an error"))
    }
    handleChange(event) {
        axios.get(`/api/sponsors//filter/?text=${event.target.value}`)
        .then (response => {
          this.setState({sponsors: response.data})
        })
        .catch(error=> console.log("there was an error"))
    }
    toggleView (view){
        this.setState({view})
    }

render() {
    return(
        <main>
            <h1 className ="title">Sponsors</h1>
            <div className="sponsorsNav">
                <div>
                    <label>View: </label>
                    <button onClick={()=> this.toggleView("detail")}>Detailed</button>
                    <button onClick={()=> this.toggleView("simple")}>Simple</button>
                </div>
                <input className="sponsorSearch" onChange={this.handleChange} placeholder="Search Sponsors"/>
            </div>
            {this.state.sponsors.map((sponsor) => { 
             let {id,firstName,lastName,phone,amount,perLap,comment,paid} = sponsor;
                return this.state.view === "detail" ? 
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

            : this.state.view === "simple" ?
            <EasySponsor 
            key={id}
            firstName={firstName}
            lastName={lastName}
            amount={amount}
            perLap={perLap}/>

            : <h1>There was an Error</h1>             
            })}
        </main>
    )
}
}

export default Sponsors;