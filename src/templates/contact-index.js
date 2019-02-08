import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import styled from "styled-components";
import { Col, Container, Row } from "../css/theme";
import HubspotForm from "react-hubspot-form";
import { graphql } from "gatsby";
import Content, { HTMLContent } from "../components/Content";
import { PageWrapper } from "../components/PageWrapper";
import { Helmet } from "react-helmet";

const StyledForm = styled.form`
  margin-top: 40px;
  textarea{
    min-height: 140px;
  }
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
  
  .hs-button{
    cursor: pointer;
  }
  
  .submitted-message{
    background: #d3b7ec;
    padding: 10px;
    border-radius: 5px;
  }
`;

const StyledMap = styled.div`
  margin-bottom: 40px;
  @media (max-width: ${props => props.theme.navCollapse}){
    margin-top: 60px;
  }
  
`

export const ContactIndexTemplate = ({
                                       content,
                                       contentComponent,
                                       title
                                     }) => {
  const PostContent = contentComponent || Content;

  return (

        <Row>
          
          <Col xs={12} sm={7}>
            <h1>{title}</h1>
            <PostContent content={content}/>
            <StyledForm>
              <HubspotForm
                portalId='5265201'
                formId='b9d8d5a8-21cc-4b1c-a556-d531846eb77d'
                onSubmit={() => console.log("Submit!")}
                onReady={(form) => console.log("Form ready!")}
                loading={<div>Loading...</div>}
              />
            </StyledForm>
          </Col>
          <Col xs={12} sm={5}>
            <StyledMap dangerouslySetInnerHTML={{ __html: "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2598.817124093776!2d-97.36559048430794!3d49.355609779339325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52c18ef448aa6111%3A0x9d07b36d48fb4507!2sGraphic+Intuitions!5e0!3m2!1sen!2sca!4v1545323471665\" width=\"100%\" height=\"380\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>" }}/>
            <ul className="list-unstyled">
            <li><strong>Phone:</strong> <a href="tel:2047466177">204-746-6177</a></li>
            <li><strong>Email:</strong> <a href="mailto:info@teamgi.ca">info@teamgi.ca</a></li>
            <li><strong>Mailing Address:</strong> Box 203 – 125 Charles Street East, Morris, Manitoba R0G 1K0</li>
            </ul>
          </Col>
        </Row>
  );
};

const ContactIndex = ({ data }) => {
  const { markdownRemark: post } = data;
  const { title, description } = post.frontmatter.meta || {};
  const metaTitle = title ? title : post.frontmatter.title;
  const metaDesc = description ? description : post.excerpt;

  return (
    <Layout>
      <Container>
        <PageWrapper
          helmet={
            <Helmet titleTemplate={`%s`}>
              <title>{`${metaTitle}`}</title>
              <meta name="description" content={`${metaDesc}`}/>
            </Helmet>
          }
        >
          <ContactIndexTemplate
            content={post.html}
            contentComponent={HTMLContent}
            title={post.frontmatter.title}
          />
        </PageWrapper>
      </Container>
    </Layout>
  );
};

ContactIndex.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default ContactIndex;

export const pageQuery = graphql`
    query ContactIndexQuery($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                title
                meta{
                    title
                    description
                }
            }
        },
    }
`;