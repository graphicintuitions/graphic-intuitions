import React from "react";
import { Col, Row } from "../css/theme";
import styled from "styled-components";
import HubspotForm from "react-hubspot-form";
import { StyledForm } from "../templates/contact-index";

const StyledNewsletter = styled(Row)`
  *{
    font-family: ${props => props.theme.headerFont} !important;
  }
  padding: 80px 0;
  padding-top: 160px;
  @media (max-width: ${props => props.theme.navCollapse}){
    padding-top: 100px;
  }
`;

const Newsletter = props => (
  <StyledNewsletter center={"xs"}>
    <Col xs={12} style={{textAlign: 'center'}}>
      <p style={{marginBottom: "40px"}}><strong>Subscribe to our Newsletter and receive updates on our work and tips that will help you too!</strong>
      </p>
    </Col>
    <Col xs={12} sm={6}>
      <StyledForm>
        <HubspotForm
          portalId='5265201'
          formId='1e9f86e2-b88b-42f3-85a2-9138f55dd448'
          onSubmit={() => console.log("Submit!")}
          onReady={(form) => console.log("Form ready!")}
          loading={<div>Loading...</div>}
        />
      </StyledForm>
    </Col>
  </StyledNewsletter>
)

export default Newsletter
