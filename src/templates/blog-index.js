import React from "react";
import Layout from "../components/Layout";
import PropTypes from "prop-types";
import { Container, Row } from "../css/theme";
import { graphql } from "gatsby";
import { PageHeaderTextImage } from "../components/PageHeaderTextImage";
import Content, { HTMLContent } from "../components/Content";
import { PageWrapper } from "../components/PageWrapper";
import { Helmet } from "react-helmet";
import BlogListItem from "../components/BlogListItem";

export const BlogIndexTemplate = ({
                                    content,
                                    contentComponent,
                                    title,
                                    articles
                                  }) => {
  const PostContent = contentComponent || Content;

  return (
    <Container>
      <PageHeaderTextImage title={title}>
        <PostContent content={content}/>
      </PageHeaderTextImage>

      <Row>
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
  );
};

const BlogIndex = ({ data }) => {
  const { post, articles } = data;
  const { title, description } = post.frontmatter.meta || {};
  const metaTitle = title ? title : post.frontmatter.title;
  const metaDesc = description ? description : post.excerpt;

  return (
    <Layout>
      <PageWrapper
        helmet={
          <Helmet titleTemplate={`%s`}>
            <title>{`${metaTitle}`}</title>
            <meta name="description" content={`${metaDesc}`}/>
          </Helmet>
        }
      >
        <BlogIndexTemplate
          content={post.html}
          contentComponent={HTMLContent}
          title={post.frontmatter.title}
          articles={articles.edges}
        />
      </PageWrapper>
    </Layout>
  );
};

BlogIndex.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogIndex;

export const pageQuery = graphql`
    query BlogIndexQuery($id: String!) {
        post: markdownRemark(id: { eq: $id }) {
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
        articles: allMarkdownRemark(
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