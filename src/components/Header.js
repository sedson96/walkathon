import React from "react";
import logo from "../img/logo.png"

function Header(props) {
    return(
        <header>
        <img src={logo} alt="Gravity Youth Logo"/>
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