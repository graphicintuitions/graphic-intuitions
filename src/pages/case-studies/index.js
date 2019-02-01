import React from "react";
import Layout from "../../components/Layout";
import { Container, Row } from "../../css/theme";
import { graphql } from "gatsby";
import CaseStudyListItem from "../../components/CaseStudyListItem";
import computerScreen from "../../img/computer-screen.svg";
import { PageHeaderTextImage } from "../../components/PageHeaderTextImage";

export default class Index extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: projects } = data.allMarkdownRemark;

    return (
      <Layout>
        <Container>
          <PageHeaderTextImage title={"Case Studies"} image={computerScreen} alt={"computer screen"}>
            <p>A digital marketing agency that’s result driven. We get the results that we do because of our industry-leading strategies and our strong team of web designers, digital marketers, and graphic designers. Don’t take our word for it, see for yourself.</p>
            <p>How do we get these results? Each business has a different goal. Whether that’s to increase website traffic, get more conversions, streamline a process, etc. Your business needs custom solutions, not a cookie cutter plan. By creating a tailored solution for your business, it increases your success. See what we’ve done for other businesses by using our digital marketing strategies and industry knowledge.</p>
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