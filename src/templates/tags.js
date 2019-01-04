import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { Container } from "../css/theme";
import { startCase } from "lodash";
import BlogListItem from "../components/BlogListItem";

class TagRoute extends React.Component {
  render() {
    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
      } tagged with “${startCase(tag)}”`;

    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map(post => (
      <BlogListItem
        slug={post.node.fields.slug}
        featured_image={post.node.frontmatter.featured_image}
        title={post.node.frontmatter.title}
        
      />
    ));

    return (
      <Layout>
        <Helmet title={`${tag} | ${title}`}/>
        <Container>
          <h2 className="title is-size-4 is-bold-light">{tagHeader}</h2>
          {postLinks}
          <p>
            <Link to="/tags/">Browse all tags</Link>
          </p>
        </Container>
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
    query TagPage($tag: String) {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(
            limit: 1000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { in: [$tag] } } }
        ) {
            totalCount
            edges {
                node {
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
