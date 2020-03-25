import React from "react";
import Helmet from "react-helmet";
import { graphql, StaticQuery, Link } from "gatsby";
import Navbar from "../components/Navbar";
import "normalize.css";
import styled, { ThemeProvider } from "styled-components";
import herobgSmall from "../img/hero-bg-small.svg";
import { Col, Container, GlobalStyle, Row, Site, theme } from "../css/theme";
import '../css/nprogress.css';
import { Footer } from "./Footer";

export const Header = styled.div`
  background-image: url(${herobgSmall});
  background-size: cover;
  background-position: bottom left;
  background-repeat: no-repeat;
  //height: 656px;
  padding-bottom: 120px;
  z-index: 2;
  position: relative;
`;

const TemplateWrapper = ({ children, props }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
          site {
            siteMetadata {
              title
              description
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
          </Helmet>
          <div style={{backgroundColor: '#FEFCA3', textAlign: "center", padding: "10px 0"}}>
              <Link to={'/covid19-updates'} style={{color: '#000000'}}>Important COVID-19 UPDATES AND RESOURCES</Link>
          </div>
          <Header>
            <Navbar/>
          </Header>
          {children}
          <Footer />
        </Site>
      </ThemeProvider>
    )}
  />
);

export default TemplateWrapper;
