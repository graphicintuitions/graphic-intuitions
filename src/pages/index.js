import React from "react";
import PropTypes from "prop-types";
import { graphql, Link, withPrefix } from "gatsby";
import Layout from "../components/Layout";
import { Cell, Grid } from "styled-css-grid";
import styled from "styled-components";
import Img from "gatsby-image";
import { ButtonOrange } from "../css/theme";

const StyledProject = styled(Cell)`
  background: #FFFFFF;
  border: 2px solid #E5E5E5;
  border-radius: 5px;
  position: relative;
  padding-top: 70px;
  .project-thumb{
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
  }
  .title{
    font-weight: bold;
    font-size: 32px;
    color: #111111;
    margin-top: 35px; 
    padding-bottom: 70px;
  }
  .button{
    position: absolute;
    bottom: -35px;
    left: 80px;
    transition: 0.3s ease-out;
    &:hover{
      bottom: -33px;
    }
  }
`;

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
        <Grid gap={"30px"} style={{ marginBottom: "200px" }}>
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
              <Cell key={project.id} width={12} style={{ position: "relative", marginBottom: "110px", minHeight: "490px" }}>
                <Grid>
                  <StyledProject
                    width={11}
                    key={project.id}
                  >
                    <Grid>
                      <Cell width={4} left={2}>
                        <img src={withPrefix("/img/" + project.frontmatter.logo.relativePath)} alt={project.frontmatter.title + " logo"}/>
                        <div className={"title"}>
                            -<br/>
                            {project.frontmatter.description}
                        </div>
                      </Cell>
                    </Grid>
                    <ButtonOrange className={"button"} to={project.fields.slug}>Read More</ButtonOrange>
                  </StyledProject>
                </Grid>
                <Img
                  className="project-thumb"
                  fixed={project.frontmatter.featured_image.childImageSharp.fixed}
                  alt={project.frontmatter.title}
                  style={{ position: "absolute", right: 0, top: "35px", boxShadow: "0px 4px 50px rgba(0, 0, 0, 0.25)" }}
                />
              </Cell>
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
                        logo{
                            relativePath
                        }
                        featured_image {
                            childImageSharp {
                                fixed(width: 600, height: 490, quality: 80) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
