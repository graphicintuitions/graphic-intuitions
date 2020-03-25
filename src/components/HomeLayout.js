import React from "react";
import Helmet from "react-helmet";
import { graphql, Link, StaticQuery } from "gatsby";
import Navbar from "../components/Navbar";
import "normalize.css";
import styled, { ThemeProvider } from "styled-components";
import herobg from "../img/hero-bg.svg";
import { Container, GlobalStyle, Site, theme } from "../css/theme";
import '../css/nprogress.css';
import { Footer } from "./Footer";

const Header = styled.div`
  background-image: url(${herobg});
  background-size: cover;
  background-position: bottom left;
  background-repeat: no-repeat;
  padding-bottom: 170px;
`;

const HeroText = styled.h1`
  &&{
    font-weight: bold;
    line-height: normal;
    font-size: 64px;
    color: #FFFFFF;
    margin-left: 243px;
    margin-top: 124px !important;
    max-width: 875px;
    @media (max-width: ${props => props.theme.navCollapse}){
      margin-left: 0;
      padding: 0 40px;
      margin-top: 40px;
      font-size: 40px;
    }  
  }
`

const TemplateWrapper = ({ children, props }) => (
  <StaticQuery
    query={graphql`
      query HomeHeadingQuery {
          site {
            siteMetadata {
              title,
              description,
            }
          }
        }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        
        <Site>
          <GlobalStyle />
          <Helmet titleTemplate={`%s | ${data.site.siteMetadata.title}`}>
            <html lang="en"/>
            <title>{data.site.siteMetadata.title}</title>
            <meta name="description" content={data.site.siteMetadata.description}/>
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet"/>
          </Helmet>
          <div style={{backgroundColor: '#FEFCA3', textAlign: "center", padding: "10px 0"}}>
            <Link to={'/covid19-updates'} style={{color: '#000000'}}>Important COVID-19 UPDATES AND RESOURCES</Link>
          </div>
          <Header>
            <Navbar/>
            <Container>
              <HeroText>We are a full service Digital Marketing Agency</HeroText>
            </Container>
          </Header>
          <Container>
            <div>{children}</div>
          </Container>
          <Footer />
        </Site>
      </ThemeProvider>
    )}
  />
);

export default TemplateWrapper;
