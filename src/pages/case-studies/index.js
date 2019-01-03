import React from "react";
import Layout from "../../components/Layout";
import { Col, Container, Row } from "../../css/theme";
import { graphql } from "gatsby";
import CaseStudyListItem from "../../components/CaseStudyListItem";

export default class Index extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: projects } = data.allMarkdownRemark;

    return (
      <Layout>
        <Container>
          <Row>
            <Col xs={12}>
              <h1>Case Studies</h1>
            </Col>
          </Row>
          
          {projects
            .map(({ node: project }) => (
              <CaseStudyListItem
                key={project.id}
                logo={project.frontmatter.logo ? project.frontmatter.logo.relativePath : null}
                description={project.frontmatter.description}
                featured_image={project.frontmatter.featured_image.childImageSharp.fluid}
                title={project.frontmatter.title}
                slug={project.fields.slug}
              />
            ))}
        </Container>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
    query CaseStudyIndexQuery {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] },
            filter: { frontmatter: { templateKey: { eq: "case-study-post" } }}
        ) {
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        description
                        featured
                        logo{
                            relativePath
                        }
                        featured_image {
                            childImageSharp {
                                fluid(maxWidth: 600, quality: 80) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;