import React from "react";
import Layout from "../../components/Layout";
import { Col, Row } from "../../css/theme";
import { graphql, Link, withPrefix } from "gatsby";
import computerScreen from "../../img/computer-screen.svg";
import styled from "styled-components";
import Img from "gatsby-image";

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
    const { edges: articles } = data.allMarkdownRemark;

    return (
      <Layout>
        <Row>
          <Col xs={12}><h1>Blog</h1></Col>
          <Row style={{marginBottom: "80px", width: "100%"}}>
            <Col xs={12} sm={6}>
              <p>blog articles go here...</p>
            </Col>
            <Col xs={false} sm={6} style={{ textAlign: "center" }}>
              <img src={computerScreen} alt={"computer screen"} className={"img-responsive"} style={{ maxWidth: "400px" }}/>
            </Col>
          </Row>
  
          <Row>
            {articles
              .map(({ node: article }) => (
                <Col key={article.id} xs={12} xsOffset={0} sm={6} smOffset={3} style={{marginBottom: "80px"}}>
                  {article.frontmatter.featured_image && 
                  <Img
                    className="img-repsonsive"
                    fluid={article.frontmatter.featured_image.childImageSharp.fluid}
                    alt={article.frontmatter.title}
                    style={{
                      width: "100%",
                      margin: "0 auto",
                    }}
                  />
                  }
                  <Link to={article.fields.slug}><h2>{article.frontmatter.title}</h2></Link>
                </Col>
              ))}
          </Row>
        </Row>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] },
            filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
        ) {
            edges {
                node {
                    id
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