import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Cell, Container, Grid } from "../css/theme";
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

export const AboutPageTemplate = ({ title, content, staff, contentComponent }) => {
  const PageContent = contentComponent || Content;
  return (
    <Container>
      <Grid style={{ marginBottom: "200px" }}>
        <Cell width={6}>
          <h1>
            {title}
          </h1>
          <PageContent className="content" content={content}/>
        </Cell>
        <Cell width={4} left={8}>
          <img src={aboutImg} alt={"GI building"} className={"img-responsive"}/>
        </Cell>
      </Grid>
      <Grid>
        <Cell width={8} left={3} style={{marginBottom: "40px"}}>
            <h2>Our Team</h2>

            {staff.map(person => (
              <Grid width={12} style={{marginBottom: "60px"}}>
                <Cell width={4}>
                  <Img
                    className="img-responsive"
                    fluid={person.image.childImageSharp.fluid}
                    alt={person.name}
                  />
                </Cell>
                <Cell width={8}>
                  <PersonTitle>
                    <h3>{person.name}</h3>
                    <div className={"job-title"}>{person.job_title}</div>
                  </PersonTitle>
                  <div dangerouslySetInnerHTML={{__html: person.bio}} />
                </Cell>
              </Grid>
            ))}
        </Cell>
      </Grid>
    </Container>
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
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        staff={post.frontmatter.staff}
        content={post.html}
      />
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
