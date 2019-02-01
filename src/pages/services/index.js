import React from "react";
import Layout from "../../components/Layout";
import { Col, Container, Row } from "../../css/theme";
import { graphql, withPrefix } from "gatsby";
import computerScreen from "../../img/computer-screen.svg";
import styled from "styled-components";
import { PageHeaderTextImage } from "../../components/PageHeaderTextImage";

const Card = styled.div`
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

export default class Index extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: services } = data.allMarkdownRemark;
    const featuredServices = services.filter(({ node: service }) => service.frontmatter.featured);
    const cols = featuredServices.length === 4 ? 6 : 4;
    
    return (
      <Layout>
        <Container>
          <PageHeaderTextImage title={"Services"} image={computerScreen}>
            <p>Our goal is to create the best marketing strategies for your business. Sometimes that means a new website or custom application that can help grow your audience or make an internal process more efficient. Sometimes it means creating a digital marketing campaign or even developing an entirely new branding strategy so that you can bring more awareness to your company and generate new leads.</p>
            <p>As a full-service marketing agency and fellow business owners, we don’t just look at one aspect of your business, we look at it as a whole. Although web design and digital marketing are just some of the services we offer, we go above and beyond to achieve your business goals. By merging our knowledge in digital marketing, user experience, graphic design, and programming, we can implement goal-based strategies to get you the best results for your budget.</p>
            <p>For examples of what we’ve done for other businesses, check out our work.</p>
          </PageHeaderTextImage>

          <Row>
            {featuredServices.map(({ node: service }) => (
              <Col key={service.id} xs={12} sm={cols} style={{ display: "flex", flexDirection: "column"}}>
                <Card>
                  {service.frontmatter.icon &&
                  <div className={"icon"}>
                    <img src={withPrefix("/img/" + service.frontmatter.icon.relativePath)} alt={service.frontmatter.title}/>
                  </div>
                  }
                  <h2>{service.frontmatter.title}</h2>
                  <p>{service.frontmatter.description}</p>
                </Card>
              </Col>
            ))}
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
      </Layout>
    );
  }
}

export const pageQuery = graphql`
    query ServicesIndexQuery {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] },
            filter: { frontmatter: { templateKey: { eq: "services-post" } }}
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
                        icon{
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