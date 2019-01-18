import React from 'react';
import { Col, Container, Row } from "../css/theme";
import Newsletter from './Newsletter'
import Facebook from '../img/facebook.svg'; 
import Instagram from '../img/instagram.svg'; 
import Twitter from '../img/twitter.svg'; 
import Youtube from '../img/youtube.svg'; 
import styled from 'styled-components';
import Link from "gatsby-link";

const SocialIcons = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img{
    width: auto;
    height: 25px;
  }
`

const Copyright = styled(Col)`
  p{
    font-family: ${props => props.theme.headerFont};
    color: #595959;
    text-align: center; 
    margin-top: 70px;
    font-size: 12px;
    margin-bottom: 0;
  }
`

const FooterLinks = styled.ul`
  display: flex;
  font-size: 12px;
  justify-content: center;
  li{
    &:after{
      content: '|';
      margin: 0 10px;
    }
    &:last-child{
      margin: 0;
      &:after{
        content: '';
      }
    }
  }
`

export const Footer = () => (
  <Container>
    <Newsletter />
    <Row center={'xs'}>
      <Col xs={12} sm={4}>
        <SocialIcons className={'list-inline'}>
          <li><img src={Facebook} alt={"Facebook Logo"} /></li>
          <li><img src={Instagram} alt={"Instagram Logo"} /></li>
          <li><img src={Twitter} alt={"Twitter Logo"} /></li>
          <li><img src={Youtube} alt={"Youtbe Logo"} /></li>
        </SocialIcons>
      </Col>
    </Row>
    <Row center={'xs'}>
      <Copyright xs={4}>
        <p>&copy; 2019 Graphic Intuitions all rights reserved</p>
      </Copyright>
    </Row>
    <Row center={'xs'}>
      <Col xs={12} style={{textAlign: "center"}}>
        <FooterLinks className={'list-inline'} style={{fontSize: "12px"}}>
          <li><Link to={'/terms-conditions'}>Terms &amp; Conditions</Link></li>
          <li><Link to={'/privacy-policy'}>Privacy Policy</Link></li>
        </FooterLinks>
      </Col>
    </Row>
  </Container>
)