import React from "react";


function Sponsor (props) {
    let {firstName,lastName,phone,amount,perLap,comment,paid} = props;
    return(
        <article>
            <div className="info">
                <h3 className="name">{firstName} {lastName}</h3>
                <h4 className="phone">{phone}</h4>
                <h5>Comments:</h5>
                <p className="comment">{comment}</p>
            </div>
            <div className="amount">
            <svg  onClick={() => props.delete(props.id)}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
                <path fill="#A89344" d="M25,3C12.87,3,3,12.87,3,25s9.87,22,22,22s22-9.87,22-22S37.13,3,25,3z M33.71,32.29c0.39,0.39,0.39,1.03,0,1.42 C33.51,33.9,33.26,34,33,34s-0.51-0.1-0.71-0.29L25,26.42l-7.29,7.29C17.51,33.9,17.26,34,17,34s-0.51-0.1-0.71-0.29 c-0.39-0.39-0.39-1.03,0-1.42L23.58,25l-7.29-7.29c-0.39-0.39-0.39-1.03,0-1.42c0.39-0.39,1.03-0.39,1.42,0L25,23.58l7.29-7.29 c0.39-0.39,1.03-0.39,1.42,0c0.39,0.39,0.39,1.03,0,1.42L26.42,25L33.71,32.29z"/>
            </svg>
            <div>
                {paid ? <label>Paid</label>: null}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
                    <path fill="#122A45" d="M25,3C12.87,3,3,12.87,3,25s9.87,22,22,22s22-9.87,22-22S37.13,3,25,3z M35.83,16.56L24.32,33.53l-9-8.35 c-0.4-0.38-0.43-1.01-0.05-1.42c0.37-0.4,1.01-0.42,1.41-0.05l7.29,6.76l10.2-15.03c0.31-0.46,0.94-0.58,1.39-0.27 C36.02,15.48,36.14,16.1,35.83,16.56z"/>
                </svg>
            </div>


                <h2 className="amountNumber">${amount}</h2>
            </div>
        </article>

    )
}

export default Sponsor