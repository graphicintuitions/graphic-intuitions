import React from "react";
import PropTypes from 'prop-types'
import { Col, Row } from "../css/theme";

export const PageHeaderTextImage = ({image, children, title, alt}) => (
  <Row>
    <Col sm={12}>
      <h1>{title}</h1>
    </Col>
    <Col xs={12} sm={6} style={{ marginBottom: "80px" }}>
      {children}
    </Col>
    <Col xs={false} sm={6} style={{ textAlign: "center" }}>
      <img src={image} alt={alt} className={"img-responsive"} style={{ maxWidth: "400px" }}/>
    </Col>
  </Row>
)

PageHeaderTextImage.propTypes = {
  title: PropTypes.string,
  alt: PropTypes.string,
  image: PropTypes.object,
  children: PropTypes.node,
}