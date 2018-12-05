import React from "react";
import Helmet from "react-helmet";
import { graphql, StaticQuery } from "gatsby";
import Navbar from "../components/Navbar";
import "normalize.css";
import styled, { ThemeProvider } from "styled-components";
import herobg from "../img/hero-bg.svg";
import { Container, theme } from "../css/theme";
import { Cell, Grid } from "styled-css-grid";
import '../css/nprogress.css';

const Header = styled.div`
  background-image: url(${herobg});
  background-size: cover;
  background-position: bottom left;
  background-repeat: no-repeat;
  height: 656px;
`;

const Site = styled.div`
  font-family: 'Montserrat', sans-serif;
  background: #F5F5F5;
  
  a{
    text-decoration: none;
    color: ${props => props.theme.textBlack};
  }
  
  p{
    font-family: Georgia, serif;
    font-style: normal;
    font-weight: normal;
    line-height: 28px;
    font-size: 16px;
    color: ${props => props.theme.textBlack};
  }
`;

const HeroText = styled.h1`
  font-weight: bold;
  line-height: normal;
  font-size: 64px;
  color: #FFFFFF;
  margin-left: 243px;
  margin-top: 124px;
  max-width: 875px;
`

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
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
          <Helmet>
            <html lang="en"/>
            <title>{data.site.siteMetadata.title}</title>
            <meta name="description" content={data.site.siteMetadata.description}/>
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet"/>
          </Helmet>
          <Header>
            <Navbar/>
            <HeroText>We are a Full Service Digital Marketing Agency</HeroText>
          </Header>
          <Container>
            <div>{children}</div>
          </Container>
        </Site>
      </ThemeProvider>
    )}
  />
);

export default TemplateWrapper;
