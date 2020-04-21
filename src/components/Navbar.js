import React from "react";
import { Link } from "gatsby";
import logo from "../img/gi-logo.svg";
import styled from "styled-components";
import { ButtonNav, Container } from "../css/theme";

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
    transition: all 0.4s;
    overflow: hidden;
    max-height: 500px;
  }
  
  > ul {
    @media (max-width: ${props => props.theme.navCollapse}){
        visibility: hidden;
        max-height: 0;
        opacity: 0;
        flex-direction: column;
        margin-top: 70px;
        right: 10px;
        li{
          margin-right: 0;
          display: block;
          text-align: right;
          width: 100%;
          padding: 10px 0;
          span{
            display: none;
          }
        }
        &.open{
          visibility: visible;
          opacity: 1;
          max-height: 999px;
        }
    }
  }
`;
const NavItem = styled.li`
  margin-right: 50px;
  font-weight: bold;
  margin-bottom: 0;
  position: relative;
  cursor: pointer; 
  
  &.caret:after{
    position: absolute;
    top: 1px;
    right: -13px;  
    content: "\u25BC";
    font-size: 10px;
    margin-left: 5px;
  }
    
  @media (max-width: ${props => props.theme.navCollapse}){
    &.caret:after{
      display: none;
    }
    &.caret{
      padding: 0;
    }
  }
  
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
  
  &:hover > ul{
    opacity: 1;
    pointer-events: initial;
  }
  
  & > ul{
    opacity: 0;
    pointer-events: none;
    display: block;
    position: absolute;
    top: 25px;
    background-color: #eaeaea;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 0 5px 5px #0000001a;
      
    li{
      flex-direction: column;
      width: 100%;
      &:hover{
        background-color: #c9c9c9;
      }
      
      a{
        display: block;
        padding: 10px 20px;
      }
    }
    
    @media (max-width: ${props => props.theme.navCollapse}){
      opacity: 1;
      pointer-events: all;
      box-shadow: none;
      background-color: transparent;
      position: relative;
      top: 0;
      
      li{
        padding: 10px 0;
        a{
          padding: 0;
        }
        &:hover{
          background-color: transparent;
        }
      }
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  position: absolute;
  right: 20px;
  .bar1, .bar2, .bar3 {
    width: 35px;
    height: 5px;
    background-color: #fff;
    margin: 6px 0;
    transition: 0.4s;
  }
  
  &.open .bar1 {
    transform: rotate(-45deg) translate(-8px, 7px);
  }
  
  &.open .bar2 {opacity: 0;}
  
  &.open .bar3 {
    transform: rotate(45deg) translate(-8px, -8px);
  }
  @media (max-width: ${props => props.theme.navCollapse}){
      display: inline-block;
  }
`;

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleNav() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <Container style={{ paddingTop: "45px" }}>
        <Nav role="navigation" aria-labelledby="header-logo">
          <div id="header-logo">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Graphic Intuitions Logo" style={{ width: "120px" }}/>
            </Link>
          </div>
          <ul className={`${isOpen ? "open" : ""}`} style={{ overflow: "visible" }}>
            <NavItem>
              <Link className="navbar-item" to="/case-studies/">
                Case Studies
              </Link>
            </NavItem>
            <NavItem>
              <Link className="navbar-item" to="/services">
                Services
              </Link>
            </NavItem>
            <NavItem className={"caret"}>
              <span>Resources</span>
              <ul>
                <NavItem>
                  <Link className="navbar-item" to="/articles">
                    Articles
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="navbar-item" to="/newsletter">
                    Newsletter
                  </Link>
                </NavItem>
              </ul>
            </NavItem>
            <NavItem>
              <Link className="navbar-item" to="/about">
                Our Team
              </Link>
            </NavItem>
            <NavItem>
              <ButtonNav className="navbar-item" to="/contact">
                Start My Project
              </ButtonNav>
            </NavItem>
          </ul>
          <Hamburger className={`container ${isOpen ? "open" : ""}`} onClick={() => this.toggleNav()}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </Hamburger>
        </Nav>
      </Container>
    );
  }
}


export default Navbar;
