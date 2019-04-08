import React, {Component} from "react";
import Info from "./Info"
import Amount from "./Amount"



class Sponsor extends Component {
    constructor() {
        super()
        this.state = {
            edit: false,

        }
        this.editToggle = this.editToggle.bind(this)
    }
    editToggle() {
        if(this.state.edit) {
            this.setState({edit:false});
        } else if (!this.state.edit) {
            this.setState({edit: true});
        }
}
    render(){

        let {id,firstName,lastName,phone,amount,perLap,comment,paid} = this.props;
        return(
            <article>
                <Info firstName={firstName}
                lastName={lastName}
                phone={phone}
                comment={comment}
                delete={this.props.delete}
                editToggle={this.editToggle}
                id={id}
                />
                <Amount id={id}
                amount={amount}
                perLap={perLap}
                edit={this.state.edit}
                paid={paid}
                paidEdit={this.props.paidEdit}
                changeAmount={this.props.changeAmount}
                editToggle={this.editToggle}
                />
            </article>
    
        )
    }
}

export default Sponsor
