import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "../css/theme";
import { Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const StyledHeading = styled.h2`
  border-left: 20px solid ${props => props.theme.orange};
  padding-left: 10px;
`;

const StyledLink = styled(Link)`
  font-size: 50px;
  text-decoration: none;
  color: ${props => props.theme.textBlack} !important;
`;

const BlogListItem = ({ slug, title, featured_image }) => (
  <Row style={{ marginBottom: "120px", width: "100%" }}>
    <Col xs={12} sm={6} style={{ display: "flex", alignItems: "center" }}>
      <StyledHeading>
        <StyledLink to={slug}>{title}</StyledLink>
      </StyledHeading>
    </Col>
    {featured_image &&
    <Col xs={12} sm={6}>
      <StyledLink to={slug}>
        <Img
          className="img-repsonsive"
          fluid={featured_image.childImageSharp.fluid}
          alt={title}
          style={{
            width: "100%",
            margin: "0 auto"
          }}
        />
      </StyledLink>
    </Col>
    }
  </Row>
);

BlogListItem.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  featured_image: PropTypes.object
};

export default BlogListItem;