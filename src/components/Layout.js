import React from "react";
import Helmet from "react-helmet";
import { graphql, StaticQuery } from "gatsby";
import Navbar from "../components/Navbar";
import "normalize.css";
import styled, { ThemeProvider } from "styled-components";
import herobgSmall from "../img/hero-bg-small.svg";
import { Container, Site, theme } from "../css/theme";
import '../css/nprogress.css';

const Header = styled.div`
  background-image: url(${herobgSmall});
  background-size: cover;
  background-position: bottom left;
  background-repeat: no-repeat;
  //height: 656px;
  padding-bottom: 170px;
`;

const TemplateWrapper = ({ children, props }) => (
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
