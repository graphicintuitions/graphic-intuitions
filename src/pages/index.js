import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import {Grid, Cell} from 'styled-css-grid'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

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
            {/*{posts*/}
              {/*.map(({ node: post }) => (*/}
                {/*<div*/}
                  {/*className="content"*/}
                  {/*style={{ border: '1px solid #333', padding: '2em 4em' }}*/}
                  {/*key={post.id}*/}
                {/*>*/}
                  {/*<p>*/}
                    {/*<Link className="has-text-primary" to={post.fields.slug}>*/}
                      {/*{post.frontmatter.title}*/}
                    {/*</Link>*/}
                    {/*<span> &bull; </span>*/}
                    {/*<small>{post.frontmatter.date}</small>*/}
                  {/*</p>*/}
                  {/*<p>*/}
                    {/*{post.excerpt}*/}
                    {/*<br />*/}
                    {/*<br />*/}
                    {/*<Link className="button is-small" to={post.fields.slug}>*/}
                      {/*Keep Reading →*/}
                    {/*</Link>*/}
                  {/*</p>*/}
                {/*</div>*/}
              {/*))}*/}
        </Grid>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
