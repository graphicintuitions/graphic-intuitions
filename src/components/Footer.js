import React from 'react';
import { Col, Container, Row } from "../css/theme";
import Newsletter from './Newsletter'
import Facebook from '../img/facebook.svg'; 
import Instagram from '../img/instagram.svg'; 
import Twitter from '../img/twitter.svg'; 
import Youtube from '../img/youtube.svg'; 
import HubSpot from '../img/hubspot-partner.svg'; 
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

export const Footer = ({showNewsletter = true}) => (
  <Container>
    {showNewsletter && 
      <Newsletter />
    }
    <Row center={'xs'}>
      <Col xs={12} sm={4}>
        <SocialIcons className={'list-inline'}>
          <li>
            <a href={"https://www.facebook.com/GraphicIntuitions"}>
              <img src={Facebook} alt={"Facebook Logo"} />
            </a>
          </li>
          <li>
            <a href={"https://www.instagram.com/graphicintuitions/"}>
              <img src={Instagram} alt={"Instagram Logo"} />
            </a>
          </li>
          <li>
            <a href={"https://twitter.com/GIntuitions"}>
              <img src={Twitter} alt={"Twitter Logo"} />
            </a>
          </li>
          <li>
            <a href={"https://www.youtube.com/channel/UCdj9S4nDL7uIo4icBILCtaA"}>
              <img src={Youtube} alt={"Youtbe Logo"} />
            </a>
          </li>
        </SocialIcons>
      </Col>
      <Col xs={12}>
        <Link to={'/services/digitizing-business-processes/'}>
          <img style={{margin: "0 auto", marginTop: 20, display: "block"}} src={HubSpot} alt={'HubSpot partner logo'} width={200}  />
        </Link>
      </Col>
    </Row>
    <Row center={'xs'}>
      <Copyright xs={12}>
        <p>
          Box 203 – 125 Charles Avenue East, Morris, Manitoba R0G 1K0 &bull; <a href="tel:2047466177">204-746-6177</a><br />
        &copy; 2019 Graphic Intuitions all rights reserved</p>
      </Copyright>
    </Row>
    <Row center={'xs'}>
      <Col xs={12} style={{textAlign: "center"}}>
        <FooterLinks className={'list-inline'} style={{fontSize: "12px"}}>
          <li><Link to={'/privacy-policy'}>Privacy Policy</Link></li>
        </FooterLinks>
      </Col>
    </Row>
  </Container>
)