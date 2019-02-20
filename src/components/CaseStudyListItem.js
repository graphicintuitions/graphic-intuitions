import React from "react";
import PropTypes from "prop-types";
import { withPrefix } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import { ButtonOrange, Col, Row } from "../css/theme";

const StyledCaseStudyListItem = styled(Row)`
  background: #FFFFFF;
  border: 2px solid #E5E5E5;
  border-radius: 5px;
  position: relative;
  padding: 70px 30px;
  margin: 0;
  @media (max-width: 767px){
    padding: 20px 5px;
  }
  .project-thumb{
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
  }
  .title{
    font-weight: bold;
    font-size: 32px;
    color: #111111;
    margin: 45px 0; 
  }
  .button{
    position: absolute;
    bottom: -35px;
    left: 80px;
    z-index: 1;
    transition: 0.3s ease-out;
    &:hover{
      bottom: -33px;
    }
    @media (max-width: 767px){
      position: relative;
      left: 0;
      padding: 20px;
      display: block;
      text-align: center;    
    }
  }
`;

const CaseStudyListItem = ({ logo, title, description, featured_image, slug }) => (
  <Col xs={12} style={{
    position: "relative",
    marginBottom: "110px",
    minHeight: "490px"
  }}>
    <Row>
      <Col
        xs={12}
        sm={10}
      >
        <StyledCaseStudyListItem>
          <Col xs={12} sm={false}>
            <Img
              className="img-repsonsive"
              fluid={featured_image}
              alt={title}
              style={{marginBottom: "20px"}}
            />
          </Col>
          <Col xs={12} sm={6} smOffset={1}>
            <img src={withPrefix("/img/" + logo)} style={{ maxWidth: "200px" }} alt={title + " logo"}/>
            <div className={"title"}>
              {description}
            </div>
          </Col>
          <Col xs={12}>
            <ButtonOrange className={"button"} to={slug}>Read More</ButtonOrange>
          </Col>
        </StyledCaseStudyListItem>
      </Col>
    </Row>
    <Row style={{ position: "absolute", top: "35px", width: "100%" }}>
      <Col xs={false} sm={5} smOffset={7} style={{ width: "100%" }}>
        <Img
          className="img-repsonsive"
          fluid={featured_image}
          alt={title}
          style={{ boxShadow: "0px 4px 50px rgba(0, 0, 0, 0.25)" }}
        />
      </Col>
    </Row>
  </Col>
);

CaseStudyListItem.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  slug: PropTypes.string,
  featured_image: PropTypes.object
};

export default CaseStudyListItem;