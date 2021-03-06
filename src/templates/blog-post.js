import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Col, Container, Row } from "../css/theme";
import styled from "styled-components";
import { PageWrapper } from "../components/PageWrapper";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const StyledBlogPost = styled.div`
  h1{
    font-size: 50px;
  }
  .blog-content{
    margin-top: 40px;
    & > p:first-child:first-letter{
      color: ${props => props.theme.orange};
      float: left;
      font-size: 75px;
      line-height: 60px;
      padding-top: 4px;
      padding-right: 8px;
      padding-left: 3px;
    }
  }
  
`;

export const StyledHeading = styled.h1`
  border-left: 20px solid ${props => props.theme.orange};
  padding-left: 10px;
  margin-bottom: 80px;
  @media (max-width: 767px) {
      font-size: 30px !important;
      margin-bottom: 40px;
  }
  
`;

const StyledTags = styled.ul`
li{
  margin-right: 0 !important;
  &:after{
    content: "\u2022";
    margin: 0 5px;
    
  }
  
  &:last-child{
    &:after{
      content: "";
      margin: 0;
    }
  }
}
  
`;

export const BlogPostTemplate = ({
                                   content,
                                   contentComponent,
                                   description,
                                   tags,
                                   title,
                                   featuredImage
                                 }) => {
  const PostContent = contentComponent || Content;

  return (
    <Container>
      <StyledBlogPost>
        <Row>
          <Col xs={12} sm={6} style={{ display: "flex", alignItems: "center" }}>
            <StyledHeading>
              {title}
            </StyledHeading>
          </Col>
          {featuredImage &&
          <Col xs={12} sm={6}>
            <PreviewCompatibleImage
              className="img-repsonsive"
              imageInfo={{ image: featuredImage }}
              alt={title}
              style={{
                width: "100%",
                margin: "0 auto"
              }}
            />
          </Col>
          }
        </Row>
        <Row className="section">
          <Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3} style={{ overflow: "hidden", wordBreak: "break-word" }}>
            <PostContent className={"blog-content"} content={content}/>
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <StyledTags className="list-inline">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </StyledTags>
              </div>
            ) : null}
          </Col>
        </Row>
      </StyledBlogPost>
    </Container>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  const { title, description } = post.frontmatter.meta || {};
  const metaTitle = title ? title : post.frontmatter.title;
  const metaDesc = description ? description : post.excerpt;
  const { featured_image = null } = post.frontmatter;

  return (
    <Layout>
      <PageWrapper
        helmet={
          <Helmet>
            <title>{`${metaTitle}`}</title>
            <meta name="description" content={`${metaDesc}`}/>
            {featured_image &&
            <meta property={"og:image"} content={"https://www.graphicintuitions.com" + featured_image.og_image.fixed.src}/>
            }

            {featured_image &&
            <meta property={"og:image:width"} content={featured_image.og_image.fixed.width}/>
            }

            {featured_image &&
            <meta property={"og:image:height"} content={featured_image.og_image.fixed.height}/>
            }
          </Helmet>
        }
      >
        <BlogPostTemplate
          content={post.html}
          contentComponent={HTMLContent}
          description={post.frontmatter.description}
          tags={post.frontmatter.tags}
          title={post.frontmatter.title}
          featuredImage={featured_image}
        />
      </PageWrapper>
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
    query BlogPostByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            excerpt
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
                tags
                meta{
                    title
                    description
                }
                featured_image {
                    childImageSharp {
                        fluid(maxWidth: 850, quality: 80) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                    og_image: childImageSharp {
                        fixed(width: 1200, height: 630, quality: 80) {
                            src
                            width
                            height
                        }
                    }
                }
            }
        }
    }
`;