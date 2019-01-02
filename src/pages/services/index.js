import React from "react";
import Layout from "../../components/Layout";
import { Col, Row } from "../../css/theme";
import { graphql, withPrefix } from "gatsby";
import computerScreen from "../../img/computer-screen.svg";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  background: #FFFFFF;
  border: 2px solid #E5E5E5;
  border-radius: 5px;
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
`

export default class Index extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: services } = data.allMarkdownRemark;
    
    return (
      <Layout>
              <Row>
                <h1>Services</h1>
                <Row>
                  <Col xs={12} sm={6} style={{marginBottom: "80px"}}>
                    <p>Our goal is to create the best marketing strategies for your business. Sometimes that means a new website or custom application that can help grow your audience or make an internal process more efficient. Sometimes it means creating a digital marketing campaign or even developing an entirely new branding strategy so that you can bring more awareness to your company and generate new leads.</p>
                    <p>As a full-service marketing agency and fellow business owners, we don’t just look at one aspect of your business, we look at it as a whole. Although web design and digital marketing are just some of the services we offer, we go above and beyond to achieve your business goals. By merging our knowledge in digital marketing, user experience, graphic design, and programming, we can implement goal-based strategies to get you the best results for your budget.</p>
                    <p>For examples of what we’ve done for other businesses, check out our work.</p>
                  </Col>
                  <Col xs={false} sm={6} style={{ textAlign: "center" }}>
                    <img src={computerScreen} alt={"computer screen"} className={"img-responsive"} style={{ maxWidth: "400px" }}/>
                  </Col>
                </Row>

                <Row style={{marginBottom: "80px"}}>
                  {services.filter(({ node: service }) => service.frontmatter.featured)
                    .map(({ node: service }) => (
                      <Col key={service.id} xs={4} style={{display: "flex", flexDirection: "column"}}>
                        <Card>
                          {service.frontmatter.icon && 
                            <div className={"icon"}>
                              <img src={withPrefix("/img/" + service.frontmatter.icon.relativePath)} alt={service.frontmatter.title} />
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
                      <Col key={service.id} xs={12} xsOffset={0} sm={6} smOffset={3} style={{marginBottom: "40px"}}>
                          <h2>{service.frontmatter.title}</h2>
                          <p>{service.frontmatter.description}</p>
                      </Col>
                    ))}
                </Row>
              </Row>
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