import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql, withPrefix } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Img from "gatsby-image";
import { Col, Container, Row } from "../css/theme";
import styled from "styled-components";
import MarkdownContent from "../components/MarkdownContent";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const HeroImage = styled(Row)`
  position: relative;
  width: 100%;
  height: calc(60vh - 120px);
  min-height: 280px;
  margin: 0;
  margin-bottom: 80px;
  z-index: 1;
  
  &:after{
    content: "";
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    pointer-events: none;
    background-image: linear-gradient(to top, 
                      ${props => props.theme.background}, 
                      rgba(255,255,255, 0) 100%);
    width: 100%;
    height: 100px;
  }
`;

const Callout = styled(Col)`
  margin: 80px 0;
  margin-top: -150px;
  padding: 150px 80px;
  padding-top: 230px;
  
  .callout-text-area{
    margin-bottom: 80px;
  }
  
  @media (max-width: 767px){
    .callout-text-area{
      margin-bottom: 00px;
    }  
  }
  
  p, h1, h2, h3{
    color: #fff;
  }
  p{
    //font-size: 16px;
  }
`;

const CalloutTopText = styled.div`
    background: #FFFFFF;
    border: 2px solid #E5E5E5;
    border-radius: 5px;
    font-family: ${props => props.theme.headerFont};
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 28px;
    text-align: center;
    padding: 80px;
    max-width: 700px;
    margin: 0 auto;
    z-index: 1;
`;

const StyledCaseStudy = styled(Row)`
  .icon{
    max-width: 60px;
    margin-bottom: 30px;
  }
  @media (max-width: 767px){
    h2{
      margin-top: 0; 
    }
    .icon{
      margin-bottom: 10px;
      margin-top: 60px;
    }
  }
`

export const CaseStudyTemplate = ({
                                    content,
                                    contentComponent,
                                    description,
                                    intro,
                                    tags,
                                    title,
                                    featured_image,
                                    logo,
                                    callout,
                                    helmet
                                  }) => {
  const PostContent = contentComponent || Content;

  return (
    <div style={{ position: "relative" }}>
      {helmet || ""}
      <HeroImage>
        <Col xs={12} style={{
          position: "absolute",
          left: "0",
          top: "-120px",
          width: "100%",
          height: "60vh",
          minHeight: "400px",
          zIndex: "-1"
        }}>
          <PreviewCompatibleImage 
            imageInfo={featured_image}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%"
            }}
            alt={title}
            className="img-repsonsive"
          />
        </Col>
      </HeroImage>
      <Container>
        <StyledCaseStudy>
          {/*<img src={withPrefix('/img/' + logo.relativePath)} alt={title + "logo"} />*/}
          <Col xs={12}>
            <h1>{title}</h1>
          </Col>

          <Col xs={12} sm={6} style={{ marginBottom: "80px" }}>
            <p>{intro}</p>
          </Col>

          <CalloutTopText>
            {callout.callout_top_text}
          </CalloutTopText>
          
          <Callout xs={12} style={{ backgroundColor: callout.callout_color }}>
            <Row>
              <Col xs={12} md={6} mdOffset={3} className={'callout-text-area'}>
                <MarkdownContent content={callout.callout_text_area}/>
              </Col>
              {callout.callout_items.map(item =>
                <Col xs={12} sm={4}>
                  <img src={withPrefix("/img/" + item.callout_item_icon.relativePath)} className="icon" alt={item.callout_item_icon.name}/>
                  <h2>{item.callout_item_title}</h2>
                  <p>{item.callout_item_text}</p>
                </Col>
              )}
            </Row>
          </Callout>

          <Col xs={12} sm={6} smOffset={3}>
            <PostContent content={content}/>
          </Col>
        </StyledCaseStudy>
      </Container>
    </div>
  );
};

CaseStudyTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  intro: PropTypes.string,
  callout: PropTypes.object,
  helmet: PropTypes.object
};

const CaseStudyPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <CaseStudyTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        intro={post.frontmatter.intro}
        helmet={
          <Helmet titleTemplate="%s | Projects">
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`}/>
          </Helmet>
        }
        featured_image={post.frontmatter.featured_image}
        logo={post.frontmatter.logo}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        callout={post.frontmatter.callout}
      />
    </Layout>
  );
};

CaseStudyPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default CaseStudyPost;

export const pageQuery = graphql`
    query CaseStudyByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                title
                description
                intro
                callout{
                    callout_color
                    callout_text_area
                    callout_top_text
                    callout_items{
                        callout_item_icon{
                            relativePath
                            name
                        }
                        callout_item_title
                        callout_item_text
                    }
                }
                featured
                featured_image {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 80) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                logo{
                    relativePath
                }
            }
        }
    }
`;
