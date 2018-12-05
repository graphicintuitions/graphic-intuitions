import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { Cell, Grid } from "styled-css-grid";
import styled from "styled-components";
import Img from 'gatsby-image'

const StyledProject = styled(Cell)`
  background: #fff;
`

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: projects } = data.allMarkdownRemark;

    return (
      <Layout>
        <Grid gap={"30px"}>
          <Cell width={6}>
            <h2>We Are The Competitive Advantage</h2>
            <p>We’ve merged a team of experienced developers, designers, digital marketing specialists, business strategists and branding experts, to provide our clients with custom marketing solutions through result-driven strategies.</p>
            <p>What sets us apart from all the other marketing agencies out there? The relationships we build with our clients, our belief in transparency, the knowledge and skills of our collective team, and our commitment to seeing results for our clients. Learn more about us here.</p>
          </Cell>
          <Cell width={6}>
          </Cell>
        </Grid>
        <Grid gap={"30px"}>
          <Cell width={6}>
          </Cell>
          <Cell width={6}>
            <h2>Results That Speak For Themselves</h2>
            <p>We can talk the talk, but can we walk the walk? The results of our work speak for themselves. Check out some of our latest projects to see what we’ve done for clients and how we’ve helped increase sales and grow their businesses.</p>
          </Cell>
        </Grid>
        <Grid>
          {projects
            .map(({ node: project }) => (
              <StyledProject 
                width={12}
                key={project.id}
              >
                <Img fluid={project.frontmatter.featured_image.childImageSharp.fluid} alt={project.frontmatter.title} />
                <p>
                  <Link className="has-text-primary" to={project.fields.slug}>
                    {project.frontmatter.title}
                  </Link>
                </p>
              </StyledProject>
            ))}
        </Grid>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] },
            filter: { frontmatter: { templateKey: { eq: "project-post" }, featured: {eq: true} }}
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
                        featured_image {
                            childImageSharp {
                                fluid(maxWidth: 2048, quality: 80) {
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
