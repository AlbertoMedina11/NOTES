import React from "react";
import {Link} from "react-router-dom";


function Navbar () {
    return (
        <nav className="navbar bg-dark container">
            <h4><Link to= "/">HOME</Link> </h4>
            <h4><Link to= "/notes" > NOTES</Link> </h4>
            <h4><Link to= "/create" >CREATE</Link> </h4>
        </nav>
    )
    };

export default Navbar;


