import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import styled from "styled-components";
import { Col, Container, Row } from "../../css/theme";
import HubspotForm from 'react-hubspot-form'

const StyledForm = styled.form`
  input, textarea{
    display: block;
    width: 100%;
    padding: 10px !important;
    font-weight: normal;
    border: 1px solid #c3c3c3;
    
    &::placeholder{
      color: #bebebe;
    }
  }
  
  .hs-button.primary.large{
    border-radius: 5px;
    font-weight: bold;
    display: inline-block;
    background: linear-gradient(180deg, #FF782D 0%, #FF2D2D 100%);
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.25);
    color: #fff;
    padding: 25px 90px !important;
    font-size: 20px;
    width: auto;
  }
  
  .field{
    margin-bottom: 20px;
  }
  
  .input + ul.hs-error-msgs{
    list-style: none !important;
    margin: 0;
    padding: 0;
    li{
      font-family: ${props => props.theme.headerFont};
      font-size: 14px;
      background: #FF2D2D;
      color: #fff;
      padding: 5px;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
  ul.hs-error-msgs{

  }
`;

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <Container>
          <Row>
            <h1>Contact</h1>
            <Row>
              <Col xs={12} sm={7}>
                <p>We’re a full service digital marketing agency just south of Winnipeg, Manitoba. We work with large national corporations as well as small local businesses. We work closely with our clients to get to know their business so we can offer the best services possible. With experience in the manufacturing, tourism, ecommerce, insurance, and many other industries, we can help your business grow.</p>
                <p>Looking to start a project or if you have a question about our services, don’t hesitate to call or contact us using the form below.</p>
                <StyledForm>
                  <HubspotForm
                    portalId='5265201'
                    formId='b9d8d5a8-21cc-4b1c-a556-d531846eb77d'
                    onSubmit={() => console.log('Submit!')}
                    onReady={(form) => console.log('Form ready!')}
                    loading={<div>Loading...</div>}
                  />
                </StyledForm>
                {/*<StyledForm*/}
                  {/*name="contact"*/}
                  {/*method="post"*/}
                  {/*action="/contact/thanks/"*/}
                  {/*data-netlify="true"*/}
                  {/*data-netlify-honeypot="bot-field"*/}
                  {/*onSubmit={this.handleSubmit}*/}
                {/*>*/}
                  {/*/!* The `form-name` hidden field is required to support form submissions without JavaScript *!/*/}
                  {/*<input type="hidden" name="form-name" value="contact"/>*/}
                  {/*<div hidden>*/}
                    {/*<label>*/}
                      {/*Don’t fill this out:{" "}*/}
                      {/*<input name="bot-field" onChange={this.handleChange}/>*/}
                    {/*</label>*/}
                  {/*</div>*/}
                  {/*<div className="field">*/}
                    {/*<label className="label" htmlFor={"name"}>Your name</label>*/}
                    {/*<div className="control">*/}
                      {/*<input className="input" placeholder={"Your Name"} type={"text"} name={"name"} onChange={this.handleChange} id={"name"} required={true}/>*/}
                    {/*</div>*/}
                  {/*</div>*/}
                  {/*<div className="field">*/}
                    {/*<label className="label" htmlFor={"email"}>Email</label>*/}
                    {/*<div className="control">*/}
                      {/*<input className="input" placeholder={"Email"} type={"email"} name={"email"} onChange={this.handleChange} id={"email"} required={true}/>*/}
                    {/*</div>*/}
                  {/*</div>*/}
                  {/*<div className="field">*/}
                    {/*<label className="label" htmlFor={"message"}>Message</label>*/}
                    {/*<div className="control">*/}
                      {/*<textarea className="textarea" rows="7" placeholder={"Message"} name={"message"} onChange={this.handleChange} id={"message"} required={true}/>*/}
                    {/*</div>*/}
                  {/*</div>*/}
                  {/*<div className="field">*/}
                    {/*<SubmitButton type="submit">Send</SubmitButton>*/}
                  {/*</div>*/}
                {/*</StyledForm>*/}
              </Col>
              <Col xs={12} sm={5}>
                <div style={{ marginBottom: "40px" }} dangerouslySetInnerHTML={{ __html: "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2598.817124093776!2d-97.36559048430794!3d49.355609779339325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52c18ef448aa6111%3A0x9d07b36d48fb4507!2sGraphic+Intuitions!5e0!3m2!1sen!2sca!4v1545323471665\" width=\"100%\" height=\"380\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>" }}/>
                {/*<ul>*/}
                {/*<li>125 Charles Ave E<br />Morris, MB<br />R0G 1K0</li>*/}
                {/*<li><a href="tel:2047466177">204.746.6177</a></li>*/}
                {/*</ul>*/}
              </Col>
            </Row>
          </Row>
        </Container>
      </Layout>
    );
  }
}