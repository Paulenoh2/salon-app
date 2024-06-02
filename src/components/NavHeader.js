import React from "react";
import { Link } from "react-router-dom";



const NavHeader = ({image1})=>{


return(

        <nav className="header-navi" >
        <div className="header-text"> paulacool@gmail.com|   086 051 6550 </div>
        <Link to = "/">HOME</Link>
        <Link to= "/about">ABOUT</Link>
        <Link to= "/contact">CONTACT</Link>
        <Link to= "/services">SERVICES</Link>
        <Link to= "/gallery">GALLERY</Link>


</nav>

)

}
export default NavHeader;