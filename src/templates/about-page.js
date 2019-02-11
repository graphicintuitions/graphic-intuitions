import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Col, Container, Row } from "../css/theme";
import aboutImg from "../img/about-us.svg";
import Img from "gatsby-image";
import styled from "styled-components";
import { PageHeaderTextImage } from "../components/PageHeaderTextImage";
import { PageWrapper } from "../components/PageWrapper";
import { Helmet } from "react-helmet";

const PersonTitle = styled.div`
  h3{
    margin-bottom: 5px;
  }
  .job-title{
    margin-bottom: 15px;
    font-size: 14px; 
    color: #6d6c6c;
  }
`;

export const AboutPageTemplate = ({ title, content, staff, contentComponent, helmet }) => {
  const PageContent = contentComponent || Content;
  return (
    <div>
      <PageHeaderTextImage title={title} image={aboutImg} alt={"GI building"}>
        <PageContent className="content" content={content}/>
      </PageHeaderTextImage>

      <Row center={"xs"} style={{ marginBottom: "40px" }}>
        <Col xs={10} sm={8}>
          <h2>Our Team</h2>
        </Col>
        <Col xs={12}>
          <Row center={"xs"}>
            <Col xs={10} sm={6} md={8}>
              <Row style={{ marginBottom: "60px" }}>
                {staff.map(person => (
                  <Col key={person.name} xs={12} md={4} style={{ marginBottom: "20px" }}>
                    {person.image &&
                    <Img
                      className="img-responsive"
                      fluid={person.image.childImageSharp.fluid}
                      alt={person.name}
                    />
                    }
                    <PersonTitle>
                      <h3>{person.name}</h3>
                      <div className={"job-title"}>{person.job_title}</div>
                    </PersonTitle>
                  </Col>
                  ))}
              </Row>
            </Col>
          </Row>
        </Col>
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
          <AboutPageTemplate
            contentComponent={HTMLContent}
            title={post.frontmatter.title}
            staff={post.frontmatter.staff}
            content={post.html}
          />
        </PageWrapper>
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
            excerpt
            id
            frontmatter {
                title
                meta{
                    title
                    description
                }
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
