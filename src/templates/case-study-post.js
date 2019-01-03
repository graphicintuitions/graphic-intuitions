import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql, withPrefix } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Img from "gatsby-image";
import { Row } from "../css/theme";

export const CaseStudyTemplate = ({
                                      content,
                                      contentComponent,
                                      description,
                                      tags,
                                      title,
                                      featured_image,
                                      logo,
                                      helmet
                                    }) => {
  const PostContent = contentComponent || Content;
  
  return (
    <Row>
      {helmet || ""}
      <img src={withPrefix('/img/' + logo.relativePath)} alt={title + "logo"} />
      <h1>
        {title}
      </h1>
      {typeof featured_image !== 'string' ? <Img fluid={featured_image.childImageSharp.fluid} alt={title} /> : <img src={featured_image} alt={title} />}
      <p>{description}</p>
      <PostContent content={content}/>
    </Row>
  );
};

CaseStudyTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const CaseStudyPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <CaseStudyTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Projects" >
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`}/>
          </Helmet>
        }
        featured_image={post.frontmatter.featured_image}
        logo={post.frontmatter.logo}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

CaseStudyPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default CaseStudyPost;

export const pageQuery = graphql`
    query CaseStudyByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                title
                description
                featured
                featured_image {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 80) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                logo{
                    relativePath
                }
            }
        }
    }
`;
