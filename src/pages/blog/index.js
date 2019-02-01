import React from "react";
import Layout from "../../components/Layout";
import { Col, Container, Row } from "../../css/theme";
import { graphql } from "gatsby";
import BlogListItem from "../../components/BlogListItem";
import { Helmet } from "react-helmet";

export default class Index extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: articles } = data.allMarkdownRemark;

    return (
      <Layout>
        <Helmet titleTemplate={`%s`}>
          <title>Digital Marketing Agency Winnipeg | What's Brewin' at Graphic Intuitions</title>
          <meta name="description" content={"What's Brewin' - as a digital marketing agency near Winnipeg, we provide current news and tips in the Digital Marketing world. Read our current posts"}/>
        </Helmet>
        <Container>
          <Row>
            <Col xs={12}><h1>Blog</h1></Col>
            {articles
              .map(({ node: article }) => (
                <BlogListItem
                  key={article.id}
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