import styled from "styled-components";
import { Link } from "gatsby";
import React  from 'react';
import { Row as RGRow, Col as RGCol } from 'react-styled-flexboxgrid';

export const theme = {
  bodyFont: "Georgia, serif",
  headerFont: "'Montserrat', sans-serif",
  main: "mediumseagreen",
  textBlack: "#111",
  paragraphBlack: "#2b2b2b",
  orange: "#EF3734",
  navCollapse: "900px",
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76  // rem
    },
    breakpoints: {
      xs: 0,  // em
      sm: 48, // em
      md: 64, // em
      lg: 75  // em
    }
  }
};

export const Site = styled.div`
  font-family: ${props => props.theme.headerFont};
  background: #F5F5F5;
  
  *{
    box-sizing: border-box;
  }
  
  *::selection {
    background: #fffc6d;
  }
  
  h1, h2, h3, h4, h5, h6{
    margin-top: 0;
  }
  
  h2 + p, h3 + p{
    margin-top: 0; 
  }
  
  p + h2, p + h3{
    padding-top: 32px; 
  }
  
  p + p{
    margin-top: 0;
  }
  
  .gatsby-resp-iframe-wrapper{
    margin-bottom: 32px;
  }
  
  blockquote p{
    font-style: italic;
    font-size: 40px;
    line-height: 130%;
    padding-bottom: 32px;
  }
  
  a{
    color: ${props => props.theme.orange}
  }
  
  p{
    font-family: ${props => props.theme.bodyFont};
    font-style: normal;
    font-weight: normal;
    line-height: 28.44px;
    font-size: 18px;
    //letter-spacing: -0.082px;
    color: ${props => props.theme.paragraphBlack};
    margin: 32px 0;
    &:last-child{
      margin-bottom: 0;
    }
    &:first-child{
      margin-top: 0;
    }
  }
  
  p:last-of-type{
    //margin-bottom: 0;
  }
  
  button{
    cursor: pointer;
  }
  
  hr{
    border: none;
    background: #dedede;
    height: 1px;
  }
  
  ul, ol{
    font-family: ${props => props.theme.bodyFont};
    line-height: 28.44px;
    font-size: 18px;
    li{
      margin-bottom: 10px;
      &:last-child{
        margin-bottom: 0;
      }
    }
  }
  
  ul.list-inline{
    list-style: none;
    margin: 0;
    padding: 0;
    li{
      margin-bottom: 10px;
    }
  }
  
  img.img-responsive{
    width: 100%;
  }
  
  h1{
    font-size: 64px;
  }
`;

export const Button = styled(Link)`
  border-radius: 5px;
  font-weight: bold;
  display: inline-block;
  text-decoration: none;
`;

export const ButtonNav = styled(Button)`
  background: linear-gradient(180deg, #FFFFFF 0%, #E5E5E5 100%);
  padding: 15px 25px;
  color: ${props => props.theme.textBlack} !important;
`;

export const ButtonOrange = styled(Button)`
  background: linear-gradient(180deg, #FF782D 0%, #FF2D2D 100%);
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.25);
  color: #fff !important;
  padding: 25px 90px;
  font-size: 20px;
`;

export const Container = styled.div`
  max-width: 1260px;
  margin: 0 auto;

  @media (max-width: 1280px){
    padding: 0 40px;
  }

  @media (max-width: 500px){
    padding: 0 20px;
  }
`;
// export const Container = (props) => <RGContainer {...props} />;

export const Row = (props) => <RGRow  {...props} />;
export const Col = (props) => <RGCol {...props} />;
