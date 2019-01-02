import React from "react";
import { Link } from "gatsby";
import logo from "../img/gi-logo.svg";
import styled from "styled-components";
import { Container, ButtonNav } from "../css/theme";

const Nav = styled.nav`
  display: flex;
  ul{
    font-family: ${props => props.theme.headerFont};
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    margin-left: auto;
    padding: 0;
    transition: all 0.5s;
    overflow: hidden;
    max-height: 500px;
    @media (max-width: ${props => props.theme.navCollapse}){
        visibility: hidden;
        max-height: 0;
        opacity: 0;
    }
  }
`;
const NavItem = styled.li`
  margin-right: 50px;
  font-weight: bold;
  a{
    color: ${props => props.theme.textBlack};
    text-decoration: none;
  }
  
  &:last-child{
    margin-right: 0;
  }
  &#header-logo{
    margin-right: auto;
  }
  
  &.navbar-hamburger{
    display: none;
  }
`;

const Hamburger = styled.a`
  display: none;
  @media (max-width: ${props => props.theme.navCollapse}){
      display: inline-block;
  }
`

const Navbar = () => (
  <Container style={{paddingTop: "45px"}}>
    <Nav role="navigation" aria-labelledby="header-logo">
      <div id="header-logo">
        <Link to="/" className="navbar-item" title="Logo">
          <img src={logo} alt="Kaldi" style={{ width: "88px" }}/>
        </Link>
      </div>
      <ul>
        <NavItem>
          <Link className="navbar-item" to="/projects/flaman-trailers/">
            Projects
          </Link>
        </NavItem>
        <NavItem>
          <Link className="navbar-item" to="/about">
            About GI
          </Link>
        </NavItem>
        <NavItem>
          <Link className="navbar-item" to="/blog">
            Blog
          </Link>
        </NavItem>
        <NavItem>
          <Link className="navbar-item" to="/services">
            Services
          </Link>
        </NavItem>
        <NavItem>
          <ButtonNav className="navbar-item" to="/contact">
            Start My Project
          </ButtonNav>
        </NavItem>
      </ul>
      <Hamburger className={"navbar-hamburger"} href={'#'}>--</Hamburger>
    </Nav>
  </Container>
);

export default Navbar;
