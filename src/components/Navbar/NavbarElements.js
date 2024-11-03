import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const Nav = styled.nav`
    
`;

export const NavLink = styled(Link)`
    color: #cccccc;
    list-style-type: none;
    text-decoration: none;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #8BB6C4;
    }
    font-size: 2em;
    padding: 10px;
    margin: 10px;
    transition: 0.3s;
    &:hover{
        color: #ffffff
    }
`;

export const Bars = styled(FaBars)`
    
`;

export const NavMenu = styled.div`
    display: flex;
    position: fixed;
    top: 0;
`;