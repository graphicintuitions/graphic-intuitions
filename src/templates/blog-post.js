import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { Col, Row } from "../css/theme";
import Img from "gatsby-image";
import styled from "styled-components";

const StyledBlogPost = styled.div`
  h1{
    font-size: 50px;
  }
`

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  featuredImage,
}) => {
  const PostContent = contentComponent || Content

  return (
    <StyledBlogPost>
      <Row style={{marginBottom: "80px"}}>
        {helmet || ''}
        <Col xs={12} sm={6} style={{display: "flex", alignItems: "center"}}>
          <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
            {title}
          </h1>
        </Col>
        {featuredImage &&
        <Col xs={12} sm={6}>
          <Img
            className="img-repsonsive"
            fluid={featuredImage.childImageSharp.fluid}
            alt={title}
            style={{
              width: "100%",
              margin: "0 auto",
            }}
          />
        </Col>
        }
      </Row>
      <Row className="section">
        <Col xs={12} sm={6} xsOffset={3}>
          <PostContent content={content} />
          {tags && tags.length ? (
            <div style={{ marginTop: `4rem` }}>
              <h4>Tags</h4>
              <ul className="taglist">
                {tags.map(tag => (
                  <li key={tag + `tag`}>
                    <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Col>
      </Row>
    </StyledBlogPost>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet
            titleTemplate="%s | Blog"
          >
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`} />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        featuredImage={post.frontmatter.featured_image}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
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
`
