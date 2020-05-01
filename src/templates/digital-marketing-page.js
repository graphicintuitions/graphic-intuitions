import React from "react";
import { graphql, Link } from "gatsby";
import Layout, { Header } from "../components/Layout";
import { Col, Container, Row } from "../css/theme";
import { PageWrapper } from "../components/PageWrapper";
import { Helmet } from "react-helmet";
import { ImageWithMarkdown } from "../components/ImageWithMarkdown";
import { Card } from "./service-index";
import { CalloutTopText } from "./case-study-post";
import styled from "styled-components";
import { Testimonials } from "../pages";
import rocket from "../img/rocket.svg";
import testimonialLogo from "../img/waldenway-logo.png";

const FullWithRow = styled.div`
  margin-top: -250px;
  padding-top: 380px;
  background-image: linear-gradient(#FF2D2D, #FF782D);
  margin-left: -20px;
  margin-right: -20px;
  @media(min-width: 1440px){
    max-width: 1430px;
    width: 1430px;
    margin-left: -85px;
  }
  
`;

const StyledCalloutTopText = styled(CalloutTopText)`
  margin-top: 120px;
  max-width: none;
`;

const StyledHeader = styled(Header)`
  @media(min-width: 1440px){
    max-width: 1430px;
    width: 1430px;
    margin-left: -85px;
  }
  margin-top: -17px;
  margin-left: -20px;
  margin-right: -20px;
  padding-bottom: 22%;
`;

const StyledRow = styled(Row)`
  margin: 0 auto;
  max-width: 1260px;
`;

const StyledCard = styled(Card)`
padding-bottom: 110px;
p{
margin: 0;
}
  h2{
    margin-top: 0;
  }
`;

const DigitalMarketingPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const { title, description } = post.frontmatter.meta || {};
  const metaTitle = title ? title : post.frontmatter.title;
  const metaDesc = description ? description : post.excerpt;

  return (
    <Layout>
      <Container>
        <PageWrapper
          helmet={
            <Helmet titleTemplate={`%s`}>
              <title>{`${metaTitle}`}</title>
              <meta name="description" content={`${metaDesc}`}/>
            </Helmet>
          }
        >
          {post.frontmatter.image_markdown.map((item, index) => (
            <ImageWithMarkdown
              style={{ marginBottom: "40px" }}
              key={"im" + index}
              isH1={index === 0}
              imageLeft={index % 2 !== 0}
              title={item.image_markdown_title}
              markdown={item.image_markdown_text}
              image={{image: item.image_markdown_image.publicURL}}
            />
          ))}
          <Row>
            <Col xs={12} style={{ textAlign: "center" }}>
              <Card style={{ padding: "70px 50px" }}>
                <Link href={'#'} style={{textDecoration: 'none'}}>
                <span style={{
                  color: "#F47732",
                  fontSize: "32px",
                  fontWeight: "bold",
                  lineHeight: "140%",
                }}>For more information on digital marketing tips and strategies,  check out our <Link to={'/blog'}>digital marketing blog</Link>.</span>
                <img src={"/img/ui-ux-design-icon.svg"} alt={'ui ux design'} style={{
                  position: "absolute",
                  right: "20%",
                  bottom: "-30px"
                }}/>
                </Link>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <StyledCalloutTopText>
                <h3>Creating a Marketing Plan</h3>
                <p>The old sales funnel has now transformed into the new customer journey wheel that is centered around customer relations. In today's market, relationships drive sales, and your marketing needs to reflect this if you want to grow. Creating relationships takes time, but it creates the most valuable customers. By implementing our digital marketing services to integrate with your entire customer journey, you will be able to see the effects in your bottom line.</p>
              </StyledCalloutTopText>
            </Col>
          </Row>

          <FullWithRow>
            <StyledRow>

              <Col xs={12} smOffset={2} sm={4} style={{ display: "flex", flexDirection: "column" }}>
                <StyledCard>
                  <h2>Brand Awareness</h2>
                  <p>We already mentioned that people need to see your message seven times before they remember it. Brand awareness takes time and it’s vital that you put the right message in front of the right audience, using the right platform. </p>
                </StyledCard>
              </Col>

              <Col xs={12} sm={4} style={{ display: "flex", flexDirection: "column" }}>
                <StyledCard>
                  <h2>Nurture</h2>
                  <p>Marketing and sales go hand in hand. Digital marketing can be implemented to streamline your sales process by nurturing your leads and help them along the customer journey, whether your sales process is long or short.</p>
                </StyledCard>
              </Col>

              <Col xs={12} smOffset={2} sm={4} style={{ display: "flex", flexDirection: "column" }}>
                <StyledCard>
                  <h2>Conversion & Delivery</h2>
                  <p>A happy customer (or an angry one) shares their experience with those in their circle. Streamlining the purchase process and nurturing the relationship during the purchase allows you to get feedback, provide them with information, and improve your internal processes.</p>
                </StyledCard>
              </Col>

              <Col xs={12} sm={4} style={{ display: "flex", flexDirection: "column" }}>
                <StyledCard>
                  <h2>Retain</h2>
                  <p>It costs 5x more to attain a new customer than to retain an existing one. Which means maintaining the relationships with your clients is essential to maximize your bottom line. Staying connected with your existing clients on a regular basis improves customer service and also keeps you top of mind. Plus referrals are an extremely valuable lead source.</p>
                </StyledCard>
              </Col>

              <Col xs={12}>
                <StyledCalloutTopText>
                  <h3>The New Era of Marketing</h3>
                  <p>The best digital marketing doesn't feel like marketing, it organically coexists as people are researching products and services to meet a need. Digital marketing services must also integrate every online aspect of your business, with your website in the center to act as your 24/7 salesperson.</p>
                </StyledCalloutTopText>
              </Col>
            </StyledRow>
          </FullWithRow>
          <StyledHeader/>

          <Row>

            <StyledRow>
              <Col xs={12} sm={8} style={{marginBottom: "120px"}}>
                <h2>Why GI?</h2>
                <p>In order to create and nurture your customer relationships, we need to learn the ins and outs of your business and your clientele. We don't just look at one aspect of your business. As a full service online marketing company, we look at your business as a whole; from the sales process to the customer service. By completing a discovery session, we can determine the digital marketing services and strategies that will benefit your business and put your business in front of the customers you want.</p>
              </Col>

              <ImageWithMarkdown
                style={{padding: "0 16px", width: "100%"}}
                imageLeft={false}
                image={{image: rocket}}
                title={"Digital Marketing Services"}
              >
                <ul>
                  <li>Search Engine Optimization (SEO)</li>
                  <li>Google Ads</li>
                  <li>Social Media Advertising</li>
                  <li>Content Creation/Blogs</li>
                  <li>Email Marketing & Automation</li>
                  <li>Conversion Optimization</li>
                  <li>Website Analytics, Tracking & Reporting</li>
                  <li>Landing Page Marketing</li>
                </ul>
              </ImageWithMarkdown>
            </StyledRow>
          </Row>

          <Row center={"xs"} style={{ marginBottom: "100px", marginTop: 120 }}>
            <Col xs={12} sm={8} md={6}>
              <Testimonials>
                <div className={"logo"}>
                  <div className={"logo__container"}>
                    <img src={testimonialLogo} style={{width: '100%'}} alt={"waldenway logo"}/>
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

export default DigitalMarketingPage;

export const digitalMarketingPageQuery = graphql`
    query DigitalMarketingPage($id: String!) {
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
