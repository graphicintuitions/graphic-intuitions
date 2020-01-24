import { Col, Row } from "../css/theme";
import React from "react";
import MarkdownContent from "./MarkdownContent";
import styled from "styled-components";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const CenteredCell = styled(Col)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    order: 2;
    @media(min-width: 768px){
      order: ${props => props.imageLeft ? 2 : 1};
    }
`;

const StyledImageCol = styled(Col)`
text-align: center;
order: 1;
@media(min-width: 768px){
  order: ${props => props.imageLeft ? 1 : 2};
}
`

export const ImageWithMarkdown = ({ style = {}, imageLeft, markdown, image, title, isH1, children }) => (
  <Row style={{ marginBottom: "80px", ...style }}>
    <CenteredCell xs={12} sm={6} imageLeft={imageLeft}>
      {isH1 && 
        <h1>{title}</h1>
      }
      {!isH1 &&
      <h2>{title}</h2>
      }
      {markdown && 
        <MarkdownContent content={markdown} />
      }
      
      {children}
    </CenteredCell>
    <StyledImageCol imageLeft={imageLeft} xs={12} sm={6}>
      <PreviewCompatibleImage
        className="img-repsonsive"
        imageInfo={image}
        alt={title}
        style={{
          width: "100%",
          margin: "0 auto"
        }}
      />
    </StyledImageCol>
  </Row>
);