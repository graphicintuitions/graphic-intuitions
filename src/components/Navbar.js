import React from "react";
import { Link } from "gatsby";
import logo from "../img/gi-logo.svg";
import styled from "styled-components";
import { Container, ButtonNav } from "../css/theme";

const Nav = styled.nav`
  ul{
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    padding-top: 45px;
  }
`;
const NavItem = styled.li`
  margin-right: 50px;
  font-weight: bold;
  
  &:last-child{
    margin-right: 0;
  }
  &#header-logo{
    margin-right: auto;
  }
`;

const Navbar = () => (
  <Container>
    <Nav role="navigation" aria-labelledby="header-logo">
      <ul>
        <NavItem id="header-logo">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="Kaldi" style={{ width: "88px" }}/>
          </Link>
        </NavItem>
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
    </Nav>
  </Container>
);

export default Navbar;
