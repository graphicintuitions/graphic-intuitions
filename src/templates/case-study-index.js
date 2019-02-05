import React from "react";
import Layout from "../components/Layout";
import PropTypes from "prop-types";
import { Container, Row } from "../css/theme";
import { graphql } from "gatsby";
import CaseStudyListItem from "../components/CaseStudyListItem";
import { PageHeaderTextImage } from "../components/PageHeaderTextImage";
import Content, { HTMLContent } from "../components/Content";
import { PageWrapper } from "../components/PageWrapper";
import { Helmet } from "react-helmet";
import computerScreen from "../img/computer-screen.svg"

export const CaseStudyIndexTemplate = ({
                                         content,
                                         contentComponent,
                                         projects
                                       }) => {
  const PostContent = contentComponent || Content;

  return (
    <Container>
      <PageHeaderTextImage title={"Case Studies"} image={computerScreen} alt={"computer screen"}>
        <PostContent content={content}/>
      </PageHeaderTextImage>

      <Row>
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
      </Row>
    </Container>
  );
};

const CaseStudyIndex = ({ data }) => {
  const { post, projects } = data;
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
        <CaseStudyIndexTemplate
          content={post.html}
          contentComponent={HTMLContent}
          projects={projects.edges}
        />
      </PageWrapper>
    </Layout>
  );
};

CaseStudyIndex.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default CaseStudyIndex;

export const pageQuery = graphql`
    query CaseStudyIndexQuery($id: String!) {
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
        projects: allMarkdownRemark(
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