import React from "react";

function Header(props) {
    let {amount,perLap,firstName,lastName} = props
    return(
        <article className="simple">
            <h5>{firstName} {lastName}</h5>
            <h5>${amount}{perLap ? "/lap" : null } </h5>
        </article>
    )

}

export default Header;