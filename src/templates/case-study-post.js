import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql, withPrefix } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Col, Container, Row } from "../css/theme";
import styled from "styled-components";
import MarkdownContent from "../components/MarkdownContent";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { PageWrapper } from "../components/PageWrapper";

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
  img{
    max-width: 100%;
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
                                    hero_image,
                                    logo,
                                    callout
                                  }) => {
  const PostContent = contentComponent || Content;

  return (
    <div style={{ position: "relative" }}>
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
            imageInfo={hero_image}
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
              {callout.callout_large_image &&
                <PreviewCompatibleImage
                  className="img-repsonsive"
                  imageInfo={callout.callout_large_image}
                  alt={title}
                  style={{
                    width: "100%",
                    margin: "0 auto"
                  }}
                />
              }
              {callout.callout_text_area && 
              <Col xs={12} md={6} mdOffset={3} className={'callout-text-area'}>
                <MarkdownContent content={callout.callout_text_area}/>
              </Col>
              }
              {callout.callout_items && callout.callout_items.map(item =>
                <Col xs={12} sm={4}>
                  {item.callout_item_icon && item.callout_item_icon.relativePath &&
                  <img src={withPrefix("/img/" + item.callout_item_icon.relativePath)} className="icon" alt={item.callout_item_icon.name}/>
                  }
                  {item.callout_item_title && 
                  <h2>{item.callout_item_title}</h2>
                  }
                  {item.callout_item_text &&
                  <p>{item.callout_item_text}</p>
                  }
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
  const {title, description} = post.frontmatter.meta || {};
  const metaTitle = title ? title : post.frontmatter.title;
  const metaDesc = description ? description : post.excerpt;

  return (
    <Layout>
      <PageWrapper
        helmet={
          <Helmet>
            <title>{`${metaTitle}`}</title>
            <meta name="description" content={`${metaDesc}`}/>
          </Helmet>
        }
      >
        <CaseStudyTemplate
          content={post.html}
          contentComponent={HTMLContent}
          description={post.frontmatter.description}
          intro={post.frontmatter.intro}
          hero_image={post.frontmatter.hero_image}
          logo={post.frontmatter.logo}
          tags={post.frontmatter.tags}
          title={post.frontmatter.title}
          callout={post.frontmatter.callout}
        />
      </PageWrapper>
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
                meta{
                    title
                    description
                }
                callout{
                    callout_color
                    callout_text_area
                    callout_top_text
                    callout_large_image {
                        childImageSharp {
                            fluid(maxWidth: 1300, quality: 80) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
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
                hero_image {
                    childImageSharp {
                        fluid(maxWidth: 3200, quality: 80) {
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
