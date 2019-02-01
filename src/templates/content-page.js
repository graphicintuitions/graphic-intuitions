import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Row, Col, Container } from "../css/theme";
import { PageWrapper } from "../components/PageWrapper";
import { Helmet } from "react-helmet";

export const ContentPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;
  return (
    <div>
      <Row>
        <Col xs={12} sm={8} smOffset={2}>
          <h1>{title}</h1>
          <PageContent className="content" content={content}/>
        </Col>
      </Row>
    </div>
  );
};

ContentPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const ContentPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const {title, description} = post.frontmatter.meta || {};
  const metaTitle = title ? title : post.frontmatter.title;
  const metaDesc = description ? description : post.excerpt;
  
  return (
    <Layout>
      <Container>
        <PageWrapper
          helmet={
            <Helmet>
              <title>{`${metaTitle}`}</title>
              <meta name="description" content={`${metaDesc}`}/>
            </Helmet>
          }
        >
          <ContentPageTemplate
            contentComponent={HTMLContent}
            title={post.frontmatter.title}
            content={post.html}
          />
        </PageWrapper>
      </Container>
    </Layout>
  );
};

ContentPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ContentPage;

export const contentPageQuery = graphql`
    query ContentPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            excerpt
            frontmatter {
                title
            }
        }
    }
`;
