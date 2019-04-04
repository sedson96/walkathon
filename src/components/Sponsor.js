import React from "react";


function Sponsor (props) {
    let {firstName,lastName,phone,amount,perLap,comment} = props;
    return(
        <article>
            <div className="info">
                <h3 className="name">{firstName} {lastName}</h3>
                <h4 className="phone">{phone}</h4>
                <h5>Comments:</h5>
                <p className="comment">{comment}</p>
            </div>
            <div className="amount">
                <h2 className="amount">${amount}</h2>
            </div>
        </article>

    )
}

export default Sponsor