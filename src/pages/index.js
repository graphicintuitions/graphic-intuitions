import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import HomeLayout from "../components/HomeLayout";
import styled from "styled-components";
import { ButtonOrange, Col, Row } from "../css/theme";
import logo1 from "../img/brett-young-logo-grey.svg";
import logo2 from "../img/flaman-logo-grey.svg";
import logo3 from "../img/southland-honda-logo-grey.svg";
import logo4 from "../img/global-logo.svg";
import step1 from "../img/step-1.svg";
import step2 from "../img/step-2.svg";
import step3 from "../img/step-3.svg";
import step4 from "../img/step-4.svg";
import computerScreen from "../img/computer-screen.svg";
import rocket from "../img/rocket.svg";
import testimonialLogo from "../img/fastcover-logo.svg";
import CaseStudyListItem from "../components/CaseStudyListItem";
import { Helmet } from "react-helmet";

const Logos = styled(Row)`
  margin-bottom: 130px; 
  padding: 80px 120px; 
  background: #fff; 
  justify-items: center;
  
  @media(max-width: 600px){
    padding: 60px;
  }
`;

const Logo = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  img{
    max-width: 150px;
  }
`;

const Step = styled(Col)`
  position: relative;
  width: 100%;
  display: flex;
  height: auto;
  margin-bottom: ${props => props.theme.flexboxgrid.gutterWidth}rem;
  p:last-of-type{
    margin-bottom: 0;
  }
  .step__inner{
    background: #FFFFFF;
    border: 2px solid #E5E5E5;
    border-radius: 5px;
    padding: 90px 120px;
    display: flex;
    flex-direction: column;
    flex: 1;
    @media(max-width: 767px){
      padding: 20px;
    }
  }
  
  .icon{
    position: absolute;
    left: -15px;
    top: 70px;
    @media(max-width: 767px){
    left: 25px;
    }
    img{
      @media(max-width: 767px){
        opacity: 0.07;
      }
    }
  }
  .title{
    font-family: Montserrat;
    font-weight: bold;
    font-size: 28px;
    @media(max-width: 767px){
      font-size: 20px; 
      margin-top: 20px; 
    }
    .orange{
      color: ${props => props.theme.orange};
    }
  }
`;

const Testimonials = styled(Col)`
  margin-top: 62.5px;
  p:last-of-type{
    margin-bottom: 0;
  }
    position: relative;
    background: #FFFFFF;
    border: 2px solid #E5E5E5;
    border-radius: 5px;
    padding: 90px 0;
    height: auto;
    text-align: center;
    @media(max-width: 600px){
      padding: 90px 20px 20px 20px;
    }
    .logo{
      position: absolute;
      top: -62.5px;
      left: 50%;
      .logo__container{
        display: flex;
        justify-content: center;
        width: 125px;
        height: 125px;
        border-radius: 50%;
        border: 2px solid #E5E5E5;    
        background-color: #fff;   
        position: relative;
        left: -50%; 
      }
    }
    .title{
      font-size: 18px;
      font-weight: bold;
    }
    .quote{
      font-weight: 800;
      line-height: 129px;
      font-size: 190px;
      text-align: center;
      color: #E0E0E0;
      
      /* grey diant */
      opacity: 0.5;
      @media(max-width: 600px){
        font-size: 100px;
        position: absolute;
        &.left{
          left: 0;
        }
        &.right{
          right: 0;
        }
      }
    }
`;

const CenteredCell = styled(Col)`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: projects } = data.allMarkdownRemark;

    return (
      <HomeLayout>
        <Helmet>
          <title>{"Manitoba's Web Design & Digital Marketing Agency"}</title>
          <meta name="description" content={"Specializing in web design and custom marketing solutions, we're a digital marketing agency that focuses on ROI and result-driven strategies."}/>
        </Helmet>
        <Row style={{ marginBottom: "80px" }}>
          <CenteredCell xs={12} sm={6}>
            <div>
              <h2>We Are The Competitive Advantage</h2>
              <p>We’ve merged a team of experienced developers, designers, digital marketing specialists, business strategists and branding experts, to provide our clients with custom marketing solutions through result-driven strategies.</p>
              <p>What sets us apart from all the other marketing agencies out there? The relationships we build with our clients, our belief in transparency, the knowledge and skills of our collective team, and our commitment to seeing results for our clients. Being full service means we look at all aspects of your business when developing a marketing plan (not just your website), and create transformative solutions to enable business growth and improve ROI.</p>
            </div>
          </CenteredCell>
          <Col xs={false} sm={6} style={{ textAlign: "center" }}>
            <img src={computerScreen} alt={"computer screen"} className={"img-responsive"} style={{ maxWidth: "400px" }}/>
          </Col>
        </Row>
        <Row style={{ marginBottom: "80px" }}>
          <Col xs={12} sm={6} style={{ textAlign: "center", marginBottom: "80px" }}>
            <img src={rocket} alt={"rocket ship"} className={"img-responsive"} style={{ maxWidth: "400px" }}/>
          </Col>
          <CenteredCell xs={12} sm={6}>
            <h2>Results That Speak For Themselves</h2>
            <p>We can talk the talk, but can we walk the walk? The results of our work speak for themselves. Check out some of our latest projects to see what we’ve done for clients and how we’ve helped increase sales and grow their businesses.</p>
          </CenteredCell>
        </Row>
        <Row>
          {projects
            .map(({ node: project }) => (
              <CaseStudyListItem
                key={project.id}
                logo={project.frontmatter.logo.relativePath}
                description={project.frontmatter.description}
                featured_image={project.frontmatter.featured_image.childImageSharp.fluid}
                title={project.frontmatter.title}
                slug={project.fields.slug}
              />
            ))}
        </Row>
        <Logos>
          <Col xs={12} style={{ textAlign: "center" }}>
            <h2 style={{marginBottom: "50px"}}>Who We Work With</h2>
          </Col>
          <Logo xs={12} sm={3}><img src={logo1} alt={"BrettYoung Logo"} className={"img-responsive"}/></Logo>
          <Logo xs={12} sm={3}><img src={logo2} alt={"Flaman Logo"} className={"img-responsive"}/></Logo>
          <Logo xs={12} sm={3}><img src={logo3} alt={"Southland Honda Logo"} className={"img-responsive"}/></Logo>
          <Logo xs={12} sm={3}><img src={logo4} alt={"Global Auction Guide Logo"} className={"img-responsive"}/></Logo>
        </Logos>

        <div style={{ textAlign: "center", marginBottom: "100px" }}>
          <ButtonOrange to={"/contact"}>Start My Project</ButtonOrange>
        </div>

        <Row center={'xs'} style={{ marginBottom: "100px" }}>
          <Col xs={12} sm={6}>
            <h2>Our Process</h2>
            <p>Starting your digital marketing journey or changing your marketing strategy is a big deal. We want you to stay involved throughout the entire process to ensure you get the results you’re looking for while creating a strong, trusting partnership between our companies.</p>
          </Col>
        </Row>
        
        <Row style={{ marginBottom: "100px" }}>
          <Step sm={12} md={6}>
            <div className={"step__inner"}>
              <div className={"icon"}><img src={step1} alt={"Discovery"}/></div>
              <div className="title"><span className="orange">1:</span> Discovery</div>
              <p>You want to succeed. Let’s help you do it. We meet with you to get to know your business goals, requirements and your inner workings to be able to give the best recommendations. Whether that's through web design, custom programming, online advertising, or numerous other marketing strategies.</p>
            </div>
          </Step>

          <Step sm={12} md={6}>
            <div className={"step__inner"}>
              <div className={"icon"}><img src={step2} alt={"Marketing Strategy Development"}/></div>
              <div className="title"><span className="orange">2:</span> Marketing Strategy Development</div>
              <p>Where do you start? With so many marketing gimmicks out there it's hard to know what is actually going to help your business. There are so many marketing gimmicks out there. We brush away the fluff and give honest recommendations that are proven to get results. We don’t fit you into a cookie cutter marketing plan, our plans and strategies fit around your business.</p>
            </div>
          </Step>

          <Step sm={12} md={6}>
            <div className={"step__inner"}>
              <div className={"icon"}><img src={step3} alt={"Implementation"}/></div>
              <div className="title"><span className="orange">3:</span> Implementation</div>
              <p>We know your business inside and out, we have the plan, now we just need to implement it. We can work with your established team to implement the strategies given, or our digital marketing agency can handle everything for you. And don’t worry, you own everything we produce for you, we are acting as part of your marketing team after all.</p>
            </div>
          </Step>

          <Step sm={12} md={6}>
            <div className={"step__inner"}>
              <div className={"icon"}><img src={step4} alt={"Success"}/></div>
              <div className="title"><span className="orange">4:</span> Success</div>
              <p>We have determined your needs and goals, set up a new strategies, and implemented the changes into your company's marketing. Now it's time to sit back and relax while we analyze the results of our efforts. Of course the work doesn't stop here. After we've reviewed results it's time to make needed changes and improvements in order to strengthen strategies and continue to move your business towards your goals.</p>
            </div>
          </Step>
        </Row>

        <Row center={"xs"} style={{marginBottom: "100px"}}>
            <Col xs={12} sm={8} md={6}>
              <Testimonials>
                <div className={"logo"}>
                  <div className={"logo__container"}><img src={testimonialLogo} alt={"testimonial logo"}/></div>
                </div>
                <Row>
                  <Col xs={12} sm={2} className={"quote left"}>&ldquo;</Col>
                  <Col xs={12} sm={8}>
                    <div className={"title"}>Fast Cover Buildings</div>
                    <div className={"location"}>Winnipeg, MB</div>
                    <p>They worked with us (and on budget) to re-develop our website and then later on to provide us the ability to draft our own blog posts and let them "tweak" it with key search words for greater exposure. We have embarked on some Google Adword campaigns but we have learnt that organically growing our online presence (although more painful, slower but less expensive) is more beneficial in the long run. Great group of people to work with, focused on targeted results.</p>
                  </Col>
                  <Col xs={12} sm={2} className={"quote right"}>&rdquo;</Col>
                </Row>
              </Testimonials>
            </Col>
        </Row>
      </HomeLayout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] },
            filter: { frontmatter: { templateKey: { eq: "case-study-post" }, featured: {eq: true} }}
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
                        logo{
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
