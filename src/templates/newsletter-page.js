import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import { Col, Container, Row } from "../css/theme";
import { graphql } from "gatsby";
import { HTMLContent } from "../components/Content";
import { PageWrapper } from "../components/PageWrapper";
import { Helmet } from "react-helmet";
import Newsletter from "../components/Newsletter";
import styled from "styled-components";

const StyledNewsletter = styled(Newsletter)`
  padding: 0 !important;
  padding-bottom: 80px !important;
`;

export const NewsletterIndexTemplate = ({
                                       content,
                                       contentComponent,
                                       title
                                     }) => {

  return (

    <Row>
      <Col xs={12} sm={8} smOffset={2}>
        <h1>{title}</h1>
      </Col>
      <Container>
        <StyledNewsletter />
      </Container>
    </Row>
  );
};

const NewsletterIndex = ({ data }) => {
  const { markdownRemark: post } = data;
  const { title, description } = post.frontmatter.meta || {};
  const metaTitle = title ? title : post.frontmatter.title;
  const metaDesc = description ? description : post.excerpt;

  return (
    <Layout showNewsletter={false}>
      <Container>
        <PageWrapper
          helmet={
            <Helmet titleTemplate={`%s`}>
              <title>{`${metaTitle}`}</title>
              <meta name="description" content={`${metaDesc}`}/>
            </Helmet>
          }
        >
          <NewsletterIndexTemplate
            content={post.html}
            contentComponent={HTMLContent}
            title={post.frontmatter.title}
          />
        </PageWrapper>
      </Container>
    </Layout>
  );
};

NewsletterIndex.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default NewsletterIndex;

export const pageQuery = graphql`
    query NewsletterIndexQuery($id: String!) {
        markdownRemark(id: { eq: $id }) {
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
    }
`;