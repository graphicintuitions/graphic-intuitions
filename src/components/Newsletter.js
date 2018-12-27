import React from "react";
import { Col, Row } from "../css/theme";
import styled from "styled-components";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import {ButtonOrange} from '../css/theme'

const url = "//graphicintuitions.us2.list-manage.com/subscribe/post?u=73676cee5fd394f2994a2a370&amp;id=29cedab13d";

const StyledNewsletter = styled(Row)`
  *{
    font-family: ${props => props.theme.headerFont} !important;
  }
  padding: 80px 0;
`;

const StyledForm = styled.div`
  width: 100%;
  .form{
    display: flex;
  }
  input{
    border-radius: 5px 0 0 5px;
    border: none;
    padding: 20px 30px;
    line-height: 20px;
    flex: 1;
  }
`

const StyledButton = styled.button`
  border-radius: 0 5px 5px 0;
  padding: 20px 10px;
  line-height: 100%;
  background: linear-gradient(180deg, #FF782D 0%, #FF2D2D 100%);
  color: #fff !important;
  font-size: 20px;
`


const Message = styled.div`
    color: black;
    background: ${props => props.error ? "#ff3820" : "#20d6ff"};
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    font-size: 14px;
    /* font-weight: 400; */
    a{
      color: #000 !important;
    }
`

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value
    });

  return (
    <StyledForm>
      {status === "sending" && <Message>Sending...</Message>}
      {status === "error" && <Message dangerouslySetInnerHTML={{__html: message}}/>}
      {status === "success" && <Message>Subscribed !</Message>}
      <div className={"form"}>
      <input
        ref={node => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <StyledButton onClick={submit}>
        Subscribe
      </StyledButton>
      </div>
    </StyledForm>
  );
};

const Newsletter = ({ data }) => (
  <StyledNewsletter center={"xs"} style={{ textAlign: "center" }}>
    <Col xs={12}>
      <p style={{marginBottom: "40px"}}><strong>Subscribe to our Newsletter and receive updates on our work and tips that will help you too!</strong>
      </p>
    </Col>
    <Col xs={12} sm={6}>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <div>
            <CustomForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          </div>
        )}
      />
    </Col>
  </StyledNewsletter>
)

export default Newsletter
