import React from "react";
import PropTypes from 'prop-types'
import { Col, Row } from "../css/theme";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

export const PageHeaderTextImage = ({image, children, title, alt}) => (
  <Row style={{ marginBottom: "80px" }}>
    <Col sm={12}>
      <h1>{title}</h1>
    </Col>
    {children && 
    <Col xs={12} sm={6}>
      {children}
    </Col>
    }
    {image && 
    <Col xs={false} sm={6} style={{ textAlign: "center" }}>
      {typeof image === 'string' &&
      <img src={image} alt={alt} className={"img-responsive"} style={{ maxWidth: "400px" }}/>
      }
      
      {typeof image !== 'string' &&
      <PreviewCompatibleImage
        imageInfo={image}
        alt={alt}
        style={{ maxWidth: "400px" }}
        className="img-repsonsive"
      />  
      }
    </Col>
    }
  </Row>
)

PageHeaderTextImage.propTypes = {
  title: PropTypes.string,
  alt: PropTypes.string,
  image: PropTypes.object,
  children: PropTypes.node,
}