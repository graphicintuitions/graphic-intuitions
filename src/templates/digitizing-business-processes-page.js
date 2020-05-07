import React from "react";
import Layout from "../components/Layout";
import { ButtonOrange, Col, Container, Row } from "../css/theme";
import { PageWrapper } from "../components/PageWrapper";
import { Helmet } from "react-helmet";
import { ImageWithMarkdown } from "../components/ImageWithMarkdown";
import { Card } from "./service-index";
import { Testimonials } from "../pages";
import testimonialLogo from "../img/waldenway-logo.png";
import HubspotForm from "react-hubspot-form";
import { StyledForm } from "./contact-index";

const DigitizingBusinessProcessesPage = ({ data }) => {
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
          {post.frontmatter.image_markdown.map((item, index) => {
            if (index === post.frontmatter.image_markdown.length - 1) {
              // we'll display the last block below the callout
              return null;
            }

            return (
              <ImageWithMarkdown
                style={{ marginBottom: "40px" }}
                key={"im" + index}
                isH1={index === 0}
                imageLeft={index % 2 !== 0}
                title={item.image_markdown_title}
                markdown={item.image_markdown_text}
                image={{ image: item.image_markdown_image.publicURL }}
              />
            );
          })}

          <Row style={{ marginBottom: "80px" }}>
            <Col xs={12} style={{ textAlign: "center" }}>
              <Card style={{ padding: "70px 50px" }}>
                <div
                  style={{
                    color: "#F47732",
                    fontSize: "32px",
                    fontWeight: "bold",
                    lineHeight: "140%"
                  }}
                >
                  We can support you by setting up this free tool with a fast and very affordable implementation. How much are your customer relationships worth to you? Start your journey today.
                </div>
                <ButtonOrange
                  style={{
                    marginTop: "20px",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                  to={"/services/digitizing-business-processes#contact"}
                >
                  Contact Us Today
                </ButtonOrange>
              </Card>
            </Col>
          </Row>

          {post.frontmatter.image_markdown.slice(-1).map((item, index) => {
            return (
              <ImageWithMarkdown
                style={{ marginBottom: "80px" }}
                key={"im" + index}
                isH1={false}
                imageLeft={index % 2 !== 0}
                title={item.image_markdown_title}
                markdown={item.image_markdown_text}
                image={{ image: item.image_markdown_image.publicURL }}
              />
            );
          })}

          <Row style={{ marginBottom: "80px" }}>
            <Col sm={12} md={8} mdOffset={2}>
              <h2>Why GI?</h2>
              <p>In order to create and nurture your customer relationships, we need to learn the ins and outs of your business and your clientele. We don't just look at one aspect of your business. As a full service online marketing company, we look at your business as a whole; from the sales process to the customer service. By completing a discovery session, we can determine the digital marketing services and strategies that will benefit your business and put your business in front of the customers you want.</p>
              <a id={"contact"}></a>
              <StyledForm style={{marginTop: 0}}>
                <HubspotForm
                  portalId='5265201'
                  formId='0cf80567-9ea9-4c07-bf2c-7350d98f8036'
                  onSubmit={() => console.log("Submit!")}
                  onReady={(form) => console.log("Form ready!")}
                  loading={<div>Loading...</div>}
                />
              </StyledForm>
            </Col>
          </Row>

          <Row center={"xs"} style={{ marginBottom: "100px", marginTop: 120 }}>
            <Col xs={12} sm={8} md={6}>
              <Testimonials>
                <div className={"logo"}>
                  <div className={"logo__container"}>
                    <img src={testimonialLogo} style={{ width: "100%" }} alt={"waldenway logo"}/>
                  </div>
                </div>
                <Row>
                  <Col xs={12} sm={2} className={"quote left"}>&ldquo;</Col>
                  <Col xs={12} sm={8}>
                    <div className={"title"}>Waldenway Canine & Kitty Camp</div>
                    <p>I have had some very positive experiences with Graphic Intuitions so far. They are very knowledgeable, friendly and easy to deal with. I have learned a lot about marketing and social media in the time I have been working with them.</p>
                  </Col>
                  <Col xs={12} sm={2} className={"quote right"}>&rdquo;</Col>
                </Row>
              </Testimonials>
            </Col>
          </Row>
        </PageWrapper>
      </Container>
    </Layout>
  );
};

export default DigitizingBusinessProcessesPage;

export const digitizingPageQuery = graphql`
    query DigitizingPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            excerpt
            id
            frontmatter {
                title
                meta{
                    title
                    description
                }
                image_markdown {
                    image_markdown_image{
                        publicURL
                    }
                    image_markdown_text
                    image_markdown_title
                }
            }
        }
    }
`;
