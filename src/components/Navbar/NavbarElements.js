import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    
`;

export const NavLink = styled(Link)`
    color: #fff;
    list-style-type: none;
    text-decoration: none;
    height: 100%;
    cursor: pointer;
    &.active {
        font-weight: 700;
    }
    font-size: 2em;
    padding: 10px;
    margin: 10px;
    transition: 0.3s;
    &:hover{
        color: #ADD8E6;
    }
`;

export const Bars = styled(FaBars)`
    
`;

export const NavMenu = styled.div`
    display: flex;
    position: fixed;
    top: 0;
`;