import React from "react";

function Header(props) {
    return(
        <header>
        <img src="https://cdn.pixabay.com/photo/2012/04/13/12/28/silhouette-32193_960_720.png" alt="Gravity Youth Logo"/>
        <nav>
          <h3 onClick={() => props.navigate("home")}>Home</h3>
          <h3 onClick={() => props.navigate("sponsors")}>Sponsors</h3>
          <h3 onClick={() => props.navigate("goals")}>Goals</h3>
          <h3 onClick={() => props.navigate("new")}>New Sponsors</h3>
        </nav>
    </header>
    )

}

export default Header;