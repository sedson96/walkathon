import React from "react" 

function Info (props) {

    let {firstName,lastName,phone,comment} = props
    return (
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
                
    )
}

export default Info