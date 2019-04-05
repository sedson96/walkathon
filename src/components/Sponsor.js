import React from "react";
import Edit from "./Edit"


function Sponsor (props) {
    let {id,firstName,lastName,phone,amount,perLap,comment,paid,edit} = props;
    return(
        <article>
            <div className="info">
            <div>
                <svg onClick={() => props.delete(props.id)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                    <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 5 7 L 5 22 L 19 22 L 19 7 L 5 7 z M 8 9 L 10 9 L 10 20 L 8 20 L 8 9 z M 14 9 L 16 9 L 16 20 L 14 20 L 14 9 z"/>
                </svg>
                <svg onClick={props.editToggle}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                    <path d="M 18.414062 2 C 18.158188 2 17.902031 2.0974687 17.707031 2.2929688 L 16 4 L 20 8 L 21.707031 6.2929688 C 22.098031 5.9019687 22.098031 5.2689063 21.707031 4.8789062 L 19.121094 2.2929688 C 18.925594 2.0974687 18.669937 2 18.414062 2 z M 14.5 5.5 L 3 17 L 3 21 L 7 21 L 18.5 9.5 L 14.5 5.5 z"/>
                </svg>
            </div>
                <h3 className="name">{firstName} {lastName}</h3>
                <h4 className="phone">{phone}</h4>
                <h5>Comments:</h5>
                <p className="comment">{comment}</p>
            </div>
            <div className="amount">
            <div>
                {/* not paid button */}
                <svg  
                    onClick={() => props.paidEdit(paid,id)}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
                    <path fill="#A89344" d="M25,3C12.87,3,3,12.87,3,25s9.87,22,22,22s22-9.87,22-22S37.13,3,25,3z M33.71,32.29c0.39,0.39,0.39,1.03,0,1.42 C33.51,33.9,33.26,34,33,34s-0.51-0.1-0.71-0.29L25,26.42l-7.29,7.29C17.51,33.9,17.26,34,17,34s-0.51-0.1-0.71-0.29 c-0.39-0.39-0.39-1.03,0-1.42L23.58,25l-7.29-7.29c-0.39-0.39-0.39-1.03,0-1.42c0.39-0.39,1.03-0.39,1.42,0L25,23.58l7.29-7.29 c0.39-0.39,1.03-0.39,1.42,0c0.39,0.39,0.39,1.03,0,1.42L26.42,25L33.71,32.29z"/>
                </svg>
                <div>
                    {/* paid buttom */}
                <svg 
                    onClick={() => props.paidEdit(paid,id)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
                    <path fill="#122A45" d="M25,3C12.87,3,3,12.87,3,25s9.87,22,22,22s22-9.87,22-22S37.13,3,25,3z M35.83,16.56L24.32,33.53l-9-8.35 c-0.4-0.38-0.43-1.01-0.05-1.42c0.37-0.4,1.01-0.42,1.41-0.05l7.29,6.76l10.2-15.03c0.31-0.46,0.94-0.58,1.39-0.27 C36.02,15.48,36.14,16.1,35.83,16.56z"/>
                </svg>
            </div>
            </div>
                    {paid && !edit? <label>Paid</label>: null}

                {!edit ? <h2 className="amountNumber">${amount}{perLap ? "/lap" : null }</h2> :
                            <Edit amount={amount} id={id} changeAmount={props.changeAmount}/>}
                
            
                
            </div>
        </article>

    )
}

export default Sponsor
