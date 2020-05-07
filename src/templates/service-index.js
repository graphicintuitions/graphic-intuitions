import React from "react";
import Layout from "../components/Layout";
import PropTypes from "prop-types";
import { Container, Row, Col, Button } from "../css/theme";
import { graphql, withPrefix } from "gatsby";
import { PageHeaderTextImage } from "../components/PageHeaderTextImage";
import Content, { HTMLContent } from "../components/Content";
import { PageWrapper } from "../components/PageWrapper";
import { Helmet } from "react-helmet";
import computerScreen from "../img/computer-screen.svg";
import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  background: #FFFFFF;
  border: 2px solid #E5E5E5;
  border-radius: 5px;
  margin-bottom: 60px;
  padding: 110px 30px 30px 30px;
  text-align: center;
  .icon{
    position: absolute;
    top: -30px;
    left: 50%;
    img{
      position: relative;
      left: -50%;
    }
  }
  @media(max-width: 767px){
    padding: 50px 30px 30px 30px;
  }
`;

export const ServiceIndexTemplate = ({
                                       content,
                                       contentComponent,
                                       title,
                                       services
                                     }) => {
  const PostContent = contentComponent || Content;
  return (
    <Container>
      <PageHeaderTextImage title={title} image={computerScreen}>
        <PostContent content={content}/>
      </PageHeaderTextImage>

      <Row>
        {services.filter(({ node: service }) => service.frontmatter.featured)
          .map(({ node: service }) => {
            console.log(service.frontmatter)
            return (
              <Col key={service.id} xs={12} sm={6} style={{ display: "flex", flexDirection: "column" }}>
                <Card>
                  {service.frontmatter.icon &&
                  <div className={"icon"}>
                    <img src={withPrefix("/img/" + service.frontmatter.icon.relativePath)} alt={service.frontmatter.title}/>
                  </div>
                  }
                  <h2>{service.frontmatter.title}</h2>
                  <p>{service.frontmatter.description}</p>
                  {!!service.frontmatter.link_to &&
                  <Button to={service.frontmatter.link_to}>Learn More</Button>
                  }
                </Card>
              </Col>
            );
          })}
      </Row>

      <Row>
        {services.filter(({ node: service }) => !service.frontmatter.featured)
          .map(({ node: service }) => (
            <Col key={service.id} xs={12} xsOffset={0} sm={6} smOffset={3} style={{ marginBottom: "40px" }}>
              <h2>{service.frontmatter.title}</h2>
              <p>{service.frontmatter.description}</p>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

const ServiceIndex = ({ data }) => {
  const { post, services } = data;
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
        <ServiceIndexTemplate
          content={post.html}
          contentComponent={HTMLContent}
          title={post.frontmatter.title}
          services={services.edges}
        />
      </PageWrapper>
    </Layout>
  );
};

ServiceIndex.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default ServiceIndex;

export const pageQuery = graphql`
    query ServiceIndexQuery($id: String!) {
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
        services: allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] },
            filter: { frontmatter: { templateKey: { in: ["services-post", "digitizing-business-processes-page"] } }}
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
                        link_to
                        icon{
                            relativePath
                        }
                    }
                }
            }
        }
    }
`;