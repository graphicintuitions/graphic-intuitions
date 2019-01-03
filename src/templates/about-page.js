import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Row, Col, Container } from "../css/theme";
import aboutImg from "../img/about-us.svg";
import Img from "gatsby-image";
import styled from "styled-components";

const PersonTitle = styled.div`
  h3{
    margin-bottom: 5px;
  }
  .job-title{
    margin-bottom: 15px;
    font-size: 14px; 
    color: #6d6c6c;
  }
`

const StyledHeader = styled(Row)`
  margin-bottom: 200px;
  img{
    max-width: 400px;
  }
  @media (max-width: 768px){
    margin-bottom: 20px;  
  }
`

export const AboutPageTemplate = ({ title, content, staff, contentComponent }) => {
  const PageContent = contentComponent || Content;
  return (
    <div>
      <StyledHeader>
        <Col xs={12} md={6}>
          <h1>
            {title}
          </h1>
          <PageContent className="content" content={content}/>
        </Col>
        <Col xs={0} md={6} style={{textAlign: "right"}}>
          <img src={aboutImg} alt={"GI building"} className={"img-responsive"}/>
        </Col>
      </StyledHeader>
      <Row center={"xs"} style={{marginBottom: "40px"}}>
        <Col xs={12} sm={8}>
          <h2>Our Team</h2>
        </Col>
        <Row center={"xs"}>
          <Col xs={12} sm={8}>
            {staff.map(person => (
              <Row style={{marginBottom: "60px"}}>
                <Col xs={12} md={4} style={{marginBottom: "20px"}}>
                  <Img
                    className="img-responsive"
                    fluid={person.image.childImageSharp.fluid}
                    alt={person.name}
                  />
                </Col>
                <Col xs={12} md={8}>
                  <PersonTitle>
                    <h3>{person.name}</h3>
                    <div className={"job-title"}>{person.job_title}</div>
                  </PersonTitle>
                  <div dangerouslySetInnerHTML={{__html: person.bio}} />
                </Col>
              </Row>
            ))}
        </Col>
        </Row>
      </Row>
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <Container>
        <AboutPageTemplate
          contentComponent={HTMLContent}
          title={post.frontmatter.title}
          staff={post.frontmatter.staff}
          content={post.html}
        />
      </Container>
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
    query AboutPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
                staff{
                    name
                    bio
                    job_title
                    image {
                        childImageSharp {
                            fluid(maxWidth: 500, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }
`;
