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
                    <NavLink to="/pictures" activeStyle>
                        Pictures
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;