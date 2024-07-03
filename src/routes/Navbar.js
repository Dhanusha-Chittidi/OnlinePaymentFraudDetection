import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// Styled components
const NavbarContainer = styled.div`
    background-color: slateblue;
    overflow: hidden;
`;

const NavItem = styled(NavLink)`
    float:right;
    display: block;
    color: white;
    margin-right : 4%;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    border-bottom: 3px solid transparent;

    &:hover {
        background-color: #fff;
        color: slateblue;
    }

    &.active {
        border-color: white; 
    }
`;

// Navbar component
export const Navbar = () => {
    return (
        <NavbarContainer>
            <NavItem to="/prediction" activeClassName="active">Predict</NavItem>
            <NavItem to="/about" activeClassName="active">About</NavItem>
            <NavItem exact to="/" activeClassName="active">Home</NavItem>
        </NavbarContainer>
    );
};
