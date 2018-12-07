import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link, withPrefix } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Img from "gatsby-image";

export const ProjectPostTemplate = ({
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
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <img src={withPrefix('/img/' + logo.relativePath)} alt={title + "logo"} />
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            {typeof featured_image !== 'string' ? <Img fluid={featured_image.childImageSharp.fluid} /> : <img src={featured_image} />}
            <p>{description}</p>
            <PostContent content={content}/>
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
          </div>
        </div>
      </div>
    </section>
  );
};

ProjectPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const ProjectPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ProjectPostTemplate
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

ProjectPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default ProjectPost;

export const pageQuery = graphql`
    query ProjectPostByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                title
                description
                tags
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
