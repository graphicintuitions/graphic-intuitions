import React from 'react'
import { kebabCase, startCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import { Container } from "../../css/theme";

const TagsPage = ({
  data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } },
}) => {
  const allTags = group

  let hashMap = {}
  allTags.forEach(({ fieldValue, totalCount }) => {
    if (hashMap[fieldValue.toLowerCase()]) {
      hashMap[fieldValue.toLowerCase()] += totalCount
    } else {
      hashMap[fieldValue.toLowerCase()] = totalCount
    }
  });
  
  let cleanTags =
    Object.entries(hashMap).map(([key, value]) => ({ fieldValue: key, totalCount: value }))
  
  cleanTags = cleanTags.sort((a, b) => a.fieldValue < b.fieldValue ? -1 : 1);
  console.log(cleanTags)
  
  return (
    <Layout>
      <Helmet title={`Tags | ${title}`} />
      <Container>
        <h1 className="title is-size-2 is-bold-light">Tags</h1>
        <ul className="list-unstyled">
          {cleanTags.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {startCase(tag.fieldValue)} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  )
}


export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000, sort: {
        fields: [frontmatter___tags]
        order: ASC
    }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
