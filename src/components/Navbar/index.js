import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/team" activeStyle>
                        Team
                    </NavLink>
                    <NavLink to="/events" activeStyle>
                        Events
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};



export default Navbar;