import React from "react";
import Layout from "../../components/Layout";
import { Col, Container, Row } from "../../css/theme";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const StyledHeading = styled.h2`
  border-left: 20px solid ${props => props.theme.orange};
  padding-left: 10px;
`;

const StyledLink = styled(Link)`
  font-size: 50px;
  text-decoration: none;
  color: ${props => props.theme.textBlack} !important;
`;

export default class Index extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: articles } = data.allMarkdownRemark;

    return (
      <Layout>
        <Container>
          <Row>
            <Col xs={12}><h1>Blog</h1></Col>
            {articles
              .map(({ node: article }) => (
                <Row style={{ marginBottom: "120px", width: "100%" }}>
                  <Col xs={12} sm={6} style={{ display: "flex", alignItems: "center" }}>
                    <StyledHeading>
                      <StyledLink to={article.fields.slug}>{article.frontmatter.title}</StyledLink>
                    </StyledHeading>
                  </Col>
                  {article.frontmatter.featured_image &&
                  <Col xs={12} sm={6}>
                    <StyledLink to={article.fields.slug}>
                      <Img
                        className="img-repsonsive"
                        fluid={article.frontmatter.featured_image.childImageSharp.fluid}
                        alt={article.frontmatter.title}
                        style={{
                          width: "100%",
                          margin: "0 auto"
                        }}
                      />
                    </StyledLink>
                  </Col>
                  }
                </Row>
              ))}
          </Row>
        </Container>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] },
            filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
        ) {
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        featured_image {
                            childImageSharp {
                                fluid(maxWidth: 850, quality: 80) {
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