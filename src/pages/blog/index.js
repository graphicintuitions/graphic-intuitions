import React from "react";
import Layout from "../../components/Layout";
import { Col, Container, Row } from "../../css/theme";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import BlogListItem from "../../components/BlogListItem";

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
                <BlogListItem
                  slug={article.fields.slug}
                  featured_image={article.frontmatter.featured_image}
                  title={article.frontmatter.title}
                />
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